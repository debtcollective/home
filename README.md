# Debt Collective Home

Website for our debt collective home page.

## DEVELOPMENT

Define env variables. Client and server-side env variables. [Check Gatsby docs to know more](https://www.gatsbyjs.com/docs/environment-variables/)

```bash
cp env.sample .env.development
```

### Doppler

If you have access to our [Doppler](doppler.com) org, you can use it to run every command with our shared environment variables.

First, you need setup and configure the [Doppler CLI](https://github.com/DopplerHQ/cli)

Then you need to setup the project by running `doppler login` and `doppler setup`.

Lastly, you need to run every command that needs env vars with `doppler run`, for example to run the Gastby server you use `doppler run yarn start`.

### To install dependencies

```bash
yarn
```

### To run the project

```bash
yarn start
```

or

```bash
doppler run yarn start
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
