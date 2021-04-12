# Debt Collective Home

Website for our debt collective home page.

## DEVELOPMENT

Define env variables. Client and server-side env variables. [Check Gatsby docs to know more](https://www.gatsbyjs.com/docs/environment-variables/)

```bash
cp env.sample .env.development
```

Note there are some sensitive data required in .env.development, request a file in #dev-team on slack.


### To install dependencies

```bash
yarn
```

### To run the project

```bash
yarn start
```

### To simply build the project
```bash
yarn build
```
or
```bash
yarn build:production
```

### Component design system 

```bash
yarn storybook-build
```

```bash
yarn storybook
```

## Release

We are using [semantic-release](https://github.com/semantic-release/semantic-release) to manage our releases. To create a release you have to run `yarn release`.

## CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing, probably you want to check the [contributing page](CONTRIBUTING.md).
