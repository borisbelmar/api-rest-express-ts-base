# Typescript Base Express project for API Rest

This is a base project for API Rest in Typescript with Express based on MVC pattern.

### Install

```bash
npm install
```

### Quick Start

```bash
npm run dev
```

or

```bash
npm start
```

### Folder structure

On src folder:

**controllers:** Controllers are the main logic of the application. This controllers will be called by the routes.

**models:** Models are the main data of the application. Can contains DTOs, entities, services, DAOs, repositories, etc.

**routes:** Routes are the endpoints declarations for controllers.

**middlewares:** Middlewares are the functions that will be called before the controller.

**lib:** Libs are wrappers for third-party libraries or own implementations.

**@types:** This is for app's types definition.

### Files

**index.ts:** This file is the entry point of the application. It will mount the server.

**app.ts:** This file is the main application file. It will be used to configure the express application.
