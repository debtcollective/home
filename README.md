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

If you are using on a new M1 mac, there are some issues with Gatsby dependencies.
Consider uninstalling brew/node/nvm/gatsby/et, and follow the steps detailed in this guide: https://www.component-driven.dev/articles/native-node-on-m1

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

## Chatwoot

We use [chatwoot](https://www.chatwoot.com/) to communicate with the debt collective members and provide support. To run a chatwoot instance locally please follow the following instructions:

You will need to have pre-installed the following dependencies:

- Docker
- Docker compose
- Redis
- Postgres

  1.- Run docker compose

```bash
docker-compose up
```

2.- List the docker containers and:

- Copy the container id from the image `chatwoot/chatwoot:latest`
- Verify rails is runnning

```bash
docker ps
```

3.- Prepare the environment

```
docker exec -it <container_id> ./bin/rails db:chatwoot_prepare
```

4.- Open your local browser in the port `3000`

### Troubleshooting

Once you open the chatwoot app, you will be requested to create an account. While doing this step, you may face the following error:

```
undefined method `feature_inbound_emails=' for #<Account> Did you mean? feature_enabled?
```

if so, please stop the `docker-compose` process and start it again.

## Release

We are using [semantic-release](https://github.com/semantic-release/semantic-release) to manage our releases. To create a release you have to run `yarn release`.

## CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing, probably you want to check the [contributing page](CONTRIBUTING.md).
