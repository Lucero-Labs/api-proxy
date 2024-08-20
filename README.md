## [Description](#description)
## [Technology](#technologies)
## [Architecture](https://docs.quarkid.org/en/Arquitectura/) and [Documentation](https://docs.quarkid.org/en/Arquitectura/componentes/)
## Configuration
### 1. [Local Environment](#local-environment-setup)
### 2. [Environment Variables](#environment-variables)
### 3. [Steps to install the component on a server](#steps-to-install-the-component-on-a-server)
### 4. [Steps to start a Quarkid Identity node](https://github.com/ssi-quarkid/Nodo-QuickStart)

------------------------------------------------------------------------------------------------------------------------------------------------------

# Description

The API Proxy component, also known as reverse proxy, is designed to operate as an entry point to multiple DID Methods, in order to simplify their management and resolution. This is because each DID implementation has its own specifications and dynamics.

## Technologies

The application uses the following technologies:

* NodeJs
* TypeScript

## Architecture
[Diagram](https://docs.quarkid.org/en/Arquitectura/)

## Documentation
[Link](https://docs.quarkid.org/en/Arquitectura/componentes/)

## Local environment setup
Clone the repository

- Open the project with the selected editor
- Open a terminal and run:

```bash
- cd source
- yarn
- yarn build
- yarn start
```

## Steps to install the component on a server

1. Have an empty Linux server.
2. Install the component and its images, which can be found on [Dockerhub](https://hub.docker.com/r/quarkid/api-proxy).

To install a component from Docker Hub on your server, follow these steps:

1. Connect to the server.

2. Install Docker on the server:
If you don't have Docker installed on your server yet, follow the instructions to install Docker on your operating system. You can find detailed guides in the official Docker documentation.

3. Download the component image from Docker Hub using the 'docker pull' command

You must specify the full name of the image, which includes the username or organization name on Docker Hub and the image name. Run the container:

```bash
docker pull quarkid/api-proxy
```

Once the component image has been downloaded to your server, you can run a container using the 'docker run' command.

6. Verify that the container is running:
Use the docker ps command to verify that the container is running on your server.

## Environment Variables

These need to be configured in the file /api-proxy/source/src/.env

### General

N/A

## Logs

N/A

## Network Requirements

The application must have internet connectivity to communicate with the network and the api-zkSync component.

## Access Route
The application must have internet connectivity.
