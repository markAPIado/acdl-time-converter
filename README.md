# Timy

Timy is a simple time conversion tool.

You can access the application at [https://timy.markapiado.com/](https://timy.markapiado.com/).

## Installation

**Cloning the repository**

Run the following command to clone the repository.

```
git clone https://github.com/markAPIado/acdl-time-converter.git
```

Run the following command to install the dependencies.

```
npm install
```

**Git**
Initialize the git repository and set the remote origin.
Note: You cannot run `npm run husky:prepare` if you have not initialized the git repository. You do not need to do this if you cloned the repository.

```
git init
```

**Husky**

Run the following command to set up the pre-commit hooks. The default `npm run prepare` script will cause issues on Docker containerization so we need to use a different script.

```
npm run husky:prepare
```

## Development

Run the following command to start the development server.

```
npm run dev
```

## Build

Run the following command to compile the code to `dist` folder.

```
npm run build
```

## Production

Run the following command to start the production server.

```
npm start
```
