'use strict';
const express = require('express');

const { Food } = require('../models/index');

const foodRouter = express.Router();

foodRouter.get('/food', getFood);
foodRouter.get('/food/:id', getOneFood);
foodRouter.post('/food', createFood);
foodRouter.put('/food/:id', updateFood);
foodRouter.delete('/food/:id', deleteFood);


async function getFood(req, res) {
    const allFood = await Food.findAll();
    res.status(200).json(allFood);
    console.log('test workedn');
    console.log(allFood);
}
async function getOneFood(req, res) {
    const id = parseInt(req.params.id);
    const onefood = await Food.findOne({
        where: {
            id: id
        }
    });
    res.status(200).json(onefood);

}
async function createFood(req, res) {
    const obj = req.body;
    let food = await Food.create(obj);
    res.status(201).json(food);
}
async function updateFood(req, res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let foundfood = await Food.findOne({ where: { id: id } });
    const updatedfood = await foundfood.update(obj);
    res.status(201).json(updatedfood);
}
async function deleteFood(req, res) {
    const id = parseInt(req.params.id);
    const deletefood = await Food.destroy({ where: { id: id } });
    res.status(204).json(deletefood);
}

module.exports = foodRouter;