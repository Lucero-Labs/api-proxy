# 01-core

El componente API Proxy, también conocido como reverse proxy, esta diseñado para
operar como un punto de entrada a múltiples DID Methods, con el fin de simplificar su gestión y
resolución. Esto se debe a que cada implementación de DID tiene sus propias especificaciones
y dinámicas.

## Tecnologías

La aplicación cuenta con las siguientes técnologias:

* NodeJs
* TypeScript

## Variables de Entorno

Variables de entorno de la aplicación

- "NODE_1_URL":"http://url_node",
- "NODE_1_PATTERN":"did_method_name",
- "NODE_1_BEHAVIOR":1,
- "NODE_2_URL":"https://url_noe",
- "NODE_2_PATTERN":"did_method_name",
- "NODE_2_BEHAVIOR":1,
- "NODE_3_URL":"http://url_node",
- "NODE_3_PATTERN":"did_method_name",
- "NODE_3_BEHAVIOR":1

## Logs

Los logs del proceso se encuentran disponibles:

### DEV o QA:

URL: https://kibana-openshift-logging.apps.ocp4-dev.gcba.gob.ar (autentica contra AD)

Deben crear el index-pattern: app-*

En la seccion Discover podran filtrar los logs por app clickeando sobre "Add a filter +"  y agregando los siguientes filtros:

kubernetes.namespace_name is {namespace}
Ej: kubernetes.namespace_name is identidad-soberana-qa
kubernetes.container_name is {componente}
Ej: kubernetes.container_name is api-proxy

Namespaces:
- identidad-soberana-dev
- identidad-soberana-qa

Componente:
- api-proxy

### HML o PRD:

URL: https://ops-view.gcba.gob.ar/ (autentica contra AD)

Entrar en Kibana, luego Discover, clickear sobre lemu-demolime-* y seleccionar el indice lemu-openshift-*
Podran filtrar los logs por app clickeando sobre "Add a filter +"  y agregando los siguientes filtros:

op_cluster is {cluster}
Ej: op_cluster is hml
op_namespace is {componente}
Ej: op_container is api-proxy

Clusters
- hml
- prodint
- prodext (en su caso usarian prodext porque su web es publica .buenosaires)

Componente
- api-proxy


## Requerimientos de red

La aplicación debe tener conectividad a internet para comunicarse con la red y al componente api-zkSyn.

## Ruta de acceso

Ambiente            URL
DEV     https://is-proxy-dev.gcba.gob.ar/
QA      https://is-proxy-qa.gcba.gob.ar
HML     https://is-proxy-hml.gcba.gob.ar
PROD    https://node-ssi.buenosaires.gob.ar/

.

