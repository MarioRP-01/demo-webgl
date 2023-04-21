# Demo WebGL

This is a demo of WebGL. It is a simple 3D scene with a rotating cube. We use the [three.js](https://threejs.org/) library to render the scene.

## Pre-requisites

Before installing project dependencies, you must have **Node.js** installed on your system. We recommend using **Node Version Manager** (`nvm`) to manage your Node.js versions. (Tested with v18.14.0)

## Installation
Once Node.js is installed on your system, just can install the dependencies using `npm`.

```shell
npm ci
```

## Development

### Development Server

To start the development server, navigate to the project directory and run the following command:

input:
```shell
# input
npm run dev
```

```shell
# output:
➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h to show help
```

> **Note:** If you are running your development server on WSL , you may need to access your application using the IP address `127.0.0.1` instead of `localhost`.

### Add new dependencies

After adding new dependencies to your package.json file, you will need to run the following command to update the `package-lock.json` file:

```shell
npm install
```

## Building for production

To build the application for production, run the following command:

```shell
npm run build
```

## References

- [Create Vite project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- [Why `npm ci`instead of `npm install`?](https://stackoverflow.com/questions/48524417/should-the-package-lock-json-file-be-added-to-gitignore)
- [three.js installation guide](https://threejs.org/docs/index.html#manual/en/introduction/Installation)