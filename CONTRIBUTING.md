# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).

## Setup

> Install yarn on your system: [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

### Install dependencies

> Only required on the first run, subsequent runs can use `yarn` to both
> bootstrap and run the development server using `yarn develop`.

```sh
yarn
```

## Available scripts

### `start`

Starts the development server. This task runs both the `start:app` and `start:lambda` scripts.

#### Usage

```sh
yarn start
```

### `build`

Build the static files into the `public` folder, turns lambda functions into a deployable form. This task runs both the `build:app` and `build:lambda` scripts.

#### Usage

```sh
yarn build
```

### `clean`

Removes all the files from `public`, `.cache` directories using the `rimraf` command.

#### Usage

```sh
yarn clean
```

### `serve`

This command is shorthand for `gatsby serve`

#### Usage

```sh
yarn serve
```

### `test`

Not implmented yet

#### Usage

```sh
yarn test
```

### `format`

Formats code and docs according to our style guidelines using `prettier`

#### Usage

```sh
yarn format
```

## License

By contributing to this project, you agree that your contributions will be licensed
under its [BSD license](LICENSE).
