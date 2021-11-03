'use strict';

require('dotenv').config();
const food =require('./food')
const clothes = require('./clothes')
const collectoin = require('../models/collection-class');


// Connects to our database depending on the URI as an environmental variable
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;


const { Sequelize, DataTypes } = require('sequelize');

// We will configure our connection options for production

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
    
  }
} : {};

// our connection object
// we are going to use this to connect to Postgres
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const foodModel =food(sequelize,DataTypes);
const clothesModel = clothes(sequelize,DataTypes);




const foodCollection = new collectoin(foodModel);
const clothesCollection = new collectoin(clothesModel);
module.exports = {
  db: sequelize,
  foodCollection: foodCollection,
  clothesCollection:clothesCollection
};