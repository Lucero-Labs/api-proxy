# Upgrade de v1.0.2-RC1 => v1.0.3-RC1

-Se externalizo las variables de entorno en un archivo config.json volviendolas independientes del build.

## DB Upgrade

## Realizar build y deploy desde tags

- api-proxy/Tags: 1.0.3-RC1

### Despliegue (OC)

Acciones

- Borrar las variables de entorno de el archivo deployment.yaml en el path ./base del manifest
- En el archivo deployment.yaml modificar el volumeMounts con lo siguiente mountPath: /opt/app-root/src/enviroments/config.json subPath: config.json
- Agregar las variables de entorno  archivo del manifest con ubicación (este caso de dev) ./overlays/dev/config-map.yaml 

