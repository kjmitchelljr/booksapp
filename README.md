# booksapp

Simple React application that utilizes GraphQL for querying data. Setup can be found on Net Ninja's [GraphQL Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f)

Created to learn about GraphQL.

## Usage

-Create mLab/MongoDB instance

In the server folder, create a `.env` file and store mLab user username in `DB_USERNAME` variable and password in `DB_PASSWORD` to connect to database

-Install Dependencies

```bash
$ npm install
```

-Run Server (Port 4000)

```bash
$ cd server
$ nodemon app.js
```

-Run React app

```bash
$ cd client
$ npm run start
```

-Visit GraphQL IDE

Go to http://localhost:4000/graphql
