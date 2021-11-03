'use strict';
const express = require('express');

const { Clothes } = require('../models/index');

const clothesRouter = express.Router();

clothesRouter.get('/clothes', getClothes); 
clothesRouter.get('/clothes/:id', getOneClothes); 
clothesRouter.post('/clothes', createClothes); 
clothesRouter.put('/clothes/:id', updateClothes); 
clothesRouter.delete('/clothes/:id', deleteClothes); 


async function getClothes(req,res) {
    const allClothes = await Clothes.findAll();
    res.status(200).json(allClothes);
    console.log('test workedn');
    console.log(allClothes);
}
async function getOneClothes(req,res) {
    const id = parseInt(req.params.id);
    const oneclothes = await Clothes.findOne({
        where: {
            id:id
        }
    });
    res.status(200).json(oneclothes);
    
}
async function createClothes(req,res) {
    const obj = req.body;
  let clothes = await Clothes.create(obj);
  res.status(201).json(clothes);
}
async function updateClothes(req,res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let foundclothes = await Clothes.findOne({ where: { id: id } });
    const updatedclothes = await foundclothes.update(obj);
    res.status(201).json(updatedclothes);
}
async function deleteClothes(req,res) {
    const id = parseInt(req.params.id);
    const deleteclothes = await Clothes.destroy({where:{id:id}});
    res.status(204).json(deleteclothes);
}

module.exports = clothesRouter;