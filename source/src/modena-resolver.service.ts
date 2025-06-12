import { Injectable } from '@nestjs/common';
import mappings from './config/methods.json';
import { BehaviourManager } from './behaviours/BehaviourManager';
import { CreateDIDRequest } from './models/create-did-request';
import { ENVIROMENT } from './main';

@Injectable()
export class AppService {
  behaviours: BehaviourManager
  _mappings: Mappings;

  constructor() {
    this.behaviours = new BehaviourManager();
  }

  ping(): string {
    return 'pong';
  }

  getMappings() {
    if (!this._mappings) {
      let nodeNumber = 1;
      let nodeUrl = ENVIROMENT[`NODE_1_URL`];

      if (!nodeUrl) {
        console.error("you should at least configure one node using the following environment variable: 'NODE_1_URL'");
        console.info("config/methods.json will used will be used instead of environment variables configuration");

        this._mappings = mappings;

        return this._mappings;
      }
      this._mappings = new Mappings();

      while (nodeUrl) {
        const pn = new ProxyNode();

        pn.url = nodeUrl;
        pn.pattern = ENVIROMENT[`NODE_${nodeNumber}_PATTERN`];
        pn.behavior = +(ENVIROMENT[`NODE_${nodeNumber}_BEHAVIOR`] ? +ENVIROMENT[`NODE_${nodeNumber}_BEHAVIOR`] : 1);

        if (!pn.pattern) {
          throw new Error(`You need to configure NODE_${nodeNumber}_PATTERN`);
        }

        if (!pn.behavior) {
          throw new Error(`You need to configure NODE_${nodeNumber}_BEHAVIOR`);
        }

        this._mappings.list.push(pn);

        console.info(`NODE_${nodeNumber} configured: ${JSON.stringify(pn)}`)

        nodeNumber++;
        nodeUrl = ENVIROMENT[`NODE_${nodeNumber}_URL`];
      }
    }
    return this._mappings;
  }

  async resolveDID(did: String): Promise<String> {
    for (let idx = 0; idx < this.getMappings().list.length; idx++) {
      const pattern = new RegExp("^" + this.getMappings().list[idx].pattern + '*');
      const actualResolver = this.getMappings().list[idx];

      if (did.match(pattern)) {
        const behaviour = this.behaviours.get(actualResolver.behavior)

        if (!behaviour.validate(did, actualResolver.pattern)) {
          return "bad did";
        }
        return behaviour.resolve(did, actualResolver.pattern, actualResolver.url);
      }
    }
  }

  async createDID(request: CreateDIDRequest): Promise<any> {
    const didMethod = this.getMappings().list.find(x => x.pattern == request.didMethod);

    if (didMethod) {
      const behaviour = this.behaviours.get(didMethod.behavior)
      const result = await behaviour.registry(JSON.parse(request.modenaRequest), didMethod.url);
      return result;
    }

    throw new Error("Did Method not supported");
  }
}

export class Mappings {
  list: ProxyNode[] = new Array<ProxyNode>();
}

export class ProxyNode {
  behavior: number;
  pattern: string;
  url: string;
}