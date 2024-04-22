## [Descripción](https://github.com/gcba/api-proxy/tree/master#descripci%C3%B3n)
## [Tecnología](https://github.com/gcba/api-proxy/tree/master#tecnolog%C3%ADas)
## [Arquitectura](https://docs.quarkid.org/Arquitectura/) y [Documentación](https://docs.quarkid.org/Arquitectura/componentes/)
## Configuración
### 1. [Entorno local](https://github.com/gcba/api-proxy/tree/master#configuraci%C3%B3n-de-entorno-local)
### 2. [Variables de Entorno](https://github.com/gcba/api-proxy/tree/master#variables-de-entorno)
### 3. [Pasos para instalar el componente en un servidor](https://github.com/gcba/api-proxy/tree/master#pasos-para-instalar-el-componente-en-un-servidor)
### 4. [Pasos para iniciar un nodo de Identidad Quarkid](https://github.com/gcba/Nodo-QuickStar/tree/master)
## [Licencia](https://github.com/gcba/api-proxy/tree/master?tab=readme-ov-file#licencia)




------------------------------------------------------------------------------------------------------------------------------------------------------

# Descripción

El componente API Proxy, también conocido como reverse proxy, esta diseñado para
operar como un punto de entrada a múltiples DID Methods, con el fin de simplificar su gestión y
resolución. Esto se debe a que cada implementación de DID tiene sus propias especificaciones
y dinámicas.

## Tecnologías

La aplicación cuenta con las siguientes técnologias:

* NodeJs
* TypeScript
  
## Arquitectura
[Diagrama](https://docs.quarkid.org/Arquitectura/)

## Documentación
[Link](https://docs.quarkid.org/Arquitectura/componentes/)

## Configuración de entorno local
Clonar el repositorio

- Abrir el proyecto con el editor seleccionado
- Abrir una terminal y ejecutar:

```bash
- cd source
- yarn
- yarn build
- yarn start
```

## Pasos para instalar el componente en un servidor

1. Contar con Linux vacío. 
2. Instalar el componente y sus imágenes, se encuentran [Dockerhub](https://hub.docker.com/r/quarkid/api-proxy). 

Para instalar un componente desde Docker Hub en tu servidor, sigue estos pasos:

1. Conéctate al servidor.

2. Instala Docker en el servidor:
Si aún no tienes Docker instalado en tu servidor, sigue las instrucciones para instalar Docker en tu sistema operativo. Puedes encontrar guías detalladas en la documentación oficial de Docker.

3. Descarga la imagen del componente desde Docker Hub utilizando el comando
   
```bash
'docker pull'
```

Debes especificar el nombre completo de la imagen, que incluye el nombre del usuario o la organización en Docker Hub y el nombre de la imagen. Ejecuta el contenedor: 

```bash
docker pull docker pull quarkid/api-proxy
```

Una vez que la imagen del componente se haya descargado en tu servidor, puedes ejecutar un contenedor utilizando el comando

```bash
'docker run'.
```

6. Verifica que el contenedor esté en ejecución:
Utiliza el comando docker ps para verificar que el contenedor esté en ejecución en tu servidor.


## Variables de Entorno

Se tienen que configurar las mismas en el archivo /api-proxy/source/src/.env

### Generales

N/A

## Logs

N/A

## Requerimientos de red

La aplicación debe tener conectividad a internet para comunicarse con la red y al componente api-zkSync.

## Ruta de acceso
La aplicación debe tener conectividad a internet.

## Licencia
Derechos de autor © 2023 Gobierno de la Ciudad de Buenos Aires

Licenciado bajo la Licencia Apache, Versión 2.0 (la "Licencia");
usted no puede utilizar este archivo excepto en cumplimiento con la Licencia.
Puede obtener una copia de la Licencia en
http://www.apache.org/licenses/LICENSE-2.0.
A menos que lo requiera la ley aplicable o se acuerde por escrito, el software
distribuido bajo la Licencia se distribuye "TAL CUAL",
SIN GARANTÍAS O CONDICIONES DE NINGÚN TIPO, ya sean expresas o implícitas.
Consulte la Licencia para el idioma específico que rige los permisos y
limitaciones bajo la Licencia.
