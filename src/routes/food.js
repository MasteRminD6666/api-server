'use strict';

const express = require('express');

const router = express.Router();
const { foodCollection } = require('../models/index');



router.get('/food',getFood);
router.post('/food',createFood);
router.put('/food/:id',updateFood);
router.delete('/food/:id', deleteFood);
router.get('/food/:id', getFood); 


async function getFood(req,res) {
    const id = parseInt(req.params.id);
    let customer = await foodCollection.read(id);
    res.status(200).json(customer);
}

async function createFood(req,res) {
    let newCusInfo = req.body;
    let customer = await foodCollection.create(newCusInfo);
    res.status(201).json(customer);
}

async function updateFood(req,res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    
    let foundFood = await foodCollection.update(id,obj);
    res.status(201).json(foundFood)
}

async function deleteFood(req,res) {
    const id = parseInt(req.params.id);
    const deleteFood = await foodCollection.delete(id);
    res.status(204).json(deleteFood);
}


module.exports = router;