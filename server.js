require('dotenv').config()

const express = require('express');
const pg = require('pg-promise')();
const conString = process.env.DB_HOST;
const db = pg(conString)
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true}));

db.any()

require('./app/routes')(app, {});
app.listen(port, function() {
  console.log(`Listening on http://localhost:${port}...`);
});
