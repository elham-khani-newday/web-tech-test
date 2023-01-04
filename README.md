# Rock Paper Scissors challenge

Project was scaffolded using [nx](https://nx.dev/) and is based on React, TypeScript and MUI.

Unit tests can be added using Jest and React Testing Library, integration tests via Cypress.

Use latest Node.js LTS v18.x e.g. via [nvm](https://github.com/nvm-sh/nvm)

Install dependencies:

```shell
npm i
```

Spin up `api` (an Express.js app) and `ui` (a React.js app):

```shell
npx nx serve api
npx nx serve ui
```

Open `ui` in browser http://localhost:4200/

Change code and see changes in browser.

Run unit tests:

```shell
npx nx test api --watch
npx nx test ui --watch
```

Run Cypress tests:

```shell
npx nx e2e ui-e2e
```
