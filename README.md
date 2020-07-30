# memoran.dev <img src="./src/assets/pencil.png" width="30" height="30">

<p align="center" style="margin:0;">
    <img src="https://img.shields.io/badge/License-MIT-green.svg">
</p>

<p align="center">
    A web-based note-taking application built in vue.js
</p>

![Screenshot](./src/assets/memoranDEV.png)

## Setup

Before being able to run and develop `memoran.dev` locally, you'll have to create a Auth0 app for development [https://auth0.com/docs/applications], this application will manage every authorized access. Github and Google sing-in are supported.

After this, create a new file at root level called `auth_config.json`, with the following information:
```json
{
  "domain": xxxx,
  "clientId": xxxx
}
```
You'll be able to find this under the Quick Start guide within the auth0 application you created.

## Installation

```bash
git clone git@github.com:memoev/memoran.dev.git
cd memoran.dev
yarn install
```

This repository only contains the source code for the client-side of the application. server side is hosted on `heroku`. This will be switched over.

#### Compiles and hot-reloads for development
```
yarn serve
```

#### Compiles and minifies for production
```
yarn build
```

#### Lints and fixes files
```
yarn lint
```

## Acknowledgements

This application started as a final project for a university class I took in 2019. I would like to thank everyone involved in my learning process, with a special shout-out to Matthew Banz for his dedication and patience with all of us.

## Author

- [Guillermo Villalta](https://gevh.dev)

## License

This project is open source and available under the [MIT License](LICENSE)