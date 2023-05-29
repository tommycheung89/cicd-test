# Introduction

This is a backend application for the `KIN Food Hall` project.
Check the [frontend](https://github.com/palo-it-hk/kin-food-hall-frontend) and [infrastructure](https://github.com/palo-it-hk/kin-food-hall-infrastructure) repositories for more information.

# Tooling

## Code Formatting

This project uses [Prettier](https://prettier.io/) for code formatting. Make sure to install a Prettier [extension](https://prettier.io/docs/en/plugins.html) for your editor.

## Code Linting

This project uses [ESLint](https://eslint.org/) for code linting. Make sure to install an ESLint [extension](https://eslint.org/docs/user-guide/integrations) for your editor.

## Node Version management

This project uses [nvm](https://github.com/nvm-sh/nvm) for Node version managmeent. Make sure to [install NVM](https://github.com/nvm-sh/nvm#install--update-script) before running the project.

# Getting Started

## Install the correct Node version

The required Node version is specified in the `.nvmrc` file. To install the correct Node version with NVM, run the following command:

```bash
nvm use
```

## Installing the dependencies

This project uses [npm](https://www.npmjs.com/) as the package manager. To install the dependencies, run the following command:

```bash
npm install
```

# Running the project

## Development

```bash
npm run start:dev
```

Open [http://localhost:8001](http://localhost:8001) with your browser to see the result. The page will reload when you make edits.

### Production

```bash
npm run build
npm run start
```

# Deployment

TBD

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Invoke local lambda function
modify the localLambdaTest.json file to test the response from different path in the controller

```bash
# serverless invoke local --function functionName --path pathname#
serverless invoke local --function main --path ./localLambdaTest.json
```