# Rock, Paper, Scissors challenge

## Introduction

The repository acts as a springboard to get you started with creating the classic game: [Rock, Paper, Scissors][rps].

## The Challenge

You work in a game company, and you're hacking with some people on recreating the school playground classic "[Rock, Paper, Scissors][rps]" on the Web.

A skeleton of a UI has been created, but it doesn't work - it always returns `draw` for the outcome.

### Requirements

1. **Please commit early, commit often** - it's helpful to see the 'steps' taken to complete the challenge.
1. **Limit time spent to 1 hour _maximum_** - Even if the code is incomplete.
1. **Implement the game, as you see fit** - The UI should report `player-1-wins`, `player-2-wins`, `draw` 'Outcome' as appropriate, based on the input given (and the rules of "[Rock, Paper, Scissors][rps]").

The code will then be used as a conversation starter at your interview.

⚠ Ideally, please keep _your_ repository private.

---

## Getting Started

This project was scaffolded using [nx](https://nx.dev/) and is based on React, TypeScript and MUI.

Unit tests can be added using Jest and React Testing Library, integration tests via Cypress.

Using latest Node.js LTS `v18.x` (e.g. via [nvm](https://github.com/nvm-sh/nvm))

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

[rps]:https://en.wikipedia.org/wiki/Rock_paper_scissors