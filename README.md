## Descripción

El componente API Proxy, también conocido como reverse proxy, esta diseñado para operar como un punto de entrada a múltiples DID Methods, con el fin de simplificar su gestión y resolución. Esto se debe a que cada implementación de DID tiene sus propias especificaciones y dinámicas.

## Tecnologías

- Node.js 14.19.1
- Nest.js 18.1.0

## Diagrama

## Licencia

Copyright [2023] [Gobierno de la Ciudad de Buenos Aires]

Licenciado bajo la Licencia Apache, Versión 2.0 (la "Licencia");
no puede utilizar este archivo excepto de conformidad con la Licencia.
Puede obtener una copia de la Licencia en

[LICENSE](http://www.apache.org/licenses/LICENSE-2.0)

A menos que lo exija la ley aplicable o se acuerde por escrito, el software
distribuido bajo la Licencia se distribuye "TAL CUAL",
SIN GARANTÍAS NI CONDICIONES DE NINGÚN TIPO, ya sean expresas o implícitas.
Consulte la Licencia para conocer el idioma específico que rige los permisos y
limitaciones bajo la Licencia.

## Variables de Entorno

### Generales

QA
- "NODE_1_URL":"http://modena.gcba-extrimian.com:7000",
- "NODE_1_PATTERN":"did:quarkid:matic",
- "NODE_1_BEHAVIOR":1,
- "NODE_2_URL":"https://is-starknet-qa.gcba.gob.ar",
- "NODE_2_PATTERN":"did:quarkid:starknet",
- "NODE_2_BEHAVIOR":1,
- "NODE_3_URL":"http://10.9.10.43:8000",
- "NODE_3_PATTERN":"did:quarkid:zksync",
- "NODE_3_BEHAVIOR":1

HML
- "NODE_1_URL":"http://modena.gcba-extrimian.com:7000",
- "NODE_1_PATTERN":"did:quarkid:matic",
- "NODE_1_BEHAVIOR":1,
- "NODE_2_URL":"https://is-starknet-hml.gcba.gob.ar",
- "NODE_2_PATTERN":"did:quarkid:starknet",
- "NODE_2_BEHAVIOR":1,
- "NODE_3_URL":"http://10.9.10.43:8000",
- "NODE_3_PATTERN":"did:quarkid:zksync",
- "NODE_3_BEHAVIOR":1

PROD
- "NODE_1_URL":"URL NODO MATIC",
- "NODE_1_PATTERN":"did:quarkid:matic",
- "NODE_1_BEHAVIOR":1,
- "NODE_2_URL":"URL NODO STARKNET"r",
- "NODE_2_PATTERN":"did:quarkid:starknet",
- "NODE_2_BEHAVIOR":1,
- "NODE_3_URL":"URL NODO ZKSYNC",
- "NODE_3_PATTERN":"did:quarkid:zksync",
- "NODE_3_BEHAVIOR":1

## Instalacón

```bash
RUN npm install -g @nestjs/cli
RUN npm install
RUN nest build
CMD ["nest" , "start"]
EXPOSE 8080
```

## Healthcheck

Para comprobar la salud del servicio basta con navegar la url base con una / al final, retornara un Status 200, con un OK.

## Requerimientos de red

La aplicación debe tener conectividad a internet para comunicarse con la red y al componente api-zkSyn.

## Ruta de acceso

[DEV](https://is-proxy-dev.gcba.gob.ar/)
[QA](https://is-proxy-qa.gcba.gob.ar/)
[HML](https://is-proxy-hml.gcba.gob.ar/)
[PROD](https://node-ssi.buenosaires.gob.ar/)



