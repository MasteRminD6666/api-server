"use strict";

const express = require("express");
require('dotenv').config();
const app = express();
const logger = require('./middleware/logger')

const notFound = require('./error-handlers/404')
const clothesRouter = require('./routes/clothes')
const foodRouter = require('./routes/food')

const errorHandler = require('./error-handlers/500');
const validator = require('./middleware/validator');


app.get('/name', validator, (req, res) => {
  const name = req.query.name
  res.status(200).json({ name: name })
})


app.get('/', (req, res) => {
  res.send('welcome from the Home page 😄')
})
app.use(express.json());
app.use(clothesRouter);
app.use(foodRouter);
app.use(logger);
app.use('*', notFound)
app.use(errorHandler);
function start() {
  app.set('port', (process.env.PORT || 3030));

  // Start node server
  app.listen(app.get('port'), function () {
    console.log('Node server is running on port ' + app.get('port'));

  });

}
module.exports = {
  app,
  start
}