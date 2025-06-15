import Behaviour from "./Behaviour";
import { validateIdentifier } from "../utils";
import axios from "axios";
export default class SidetreeBehaviour implements Behaviour {
  getMethodLength = (method: string) => {
    return method.length + ((method.slice(-1) === ':') ? 0 : 1);
  }
  
  async resolve(did: String, method: string, url: string) {
    const method_length =  this.getMethodLength(method);
    console.log(`getting: ${url}/resolve/${did.substring(method_length)}`)

    try {
      return (await axios.get(`${url}/resolve/${did.substring(method_length)}`)).data;
    } catch (error) {
      return error.response;
    }
  }

  validate(did: String, method: string): boolean {
    const method_length = this.getMethodLength(method);

    if (did.charAt(method_length - 1) !== ':')
      return false;
    return validateIdentifier(did.substring(method_length));
  }

  async registry(request: any, url: string): Promise<any> {
    try {
      console.log({request})
      return (await axios.post(`${url}/create`, request)).data;
    } catch (error) {
      return error.response;
    }
  }
}
