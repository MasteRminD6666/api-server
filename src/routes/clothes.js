
'use strict';

const express = require('express');

const router = express.Router();
const { clothesCollection } = require('../models/index');



router.get('/clothes',getClothes);
router.post('/clothes',createClothes);
router.put('/clothes/:id',updateClothes);
router.delete('/clothes/:id', deleteClothes);
router.get('/clothes/:id', getClothes); 


async function getClothes(req,res) {
    const id = parseInt(req.params.id);
    let customer = await clothesCollection.read(id);
    res.status(200).json(customer);
}

async function createClothes(req,res) {
    let newCusInfo = req.body;
    let customer = await clothesCollection.create(newCusInfo);
    res.status(201).json(customer);
}

async function updateClothes(req,res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let foundclothes = await clothesCollection.update(id,obj);
    res.status(201).json(foundclothes)
}

async function deleteClothes(req,res) {
    const id = parseInt(req.params.id);
    const deleteclothes = await clothesCollection.delete(id);
    res.status(204).json(deleteclothes);
}


module.exports = router;









// 'use strict';
// const express = require('express');

// const { Clothes } = require('../models/index');

// const clothesRouter = express.Router();

// clothesRouter.get('/clothes', getClothes); 
// clothesRouter.get('/clothes/:id', getOneClothes); 
// clothesRouter.post('/clothes', createClothes); 
// clothesRouter.put('/clothes/:id', updateClothes); 
// clothesRouter.delete('/clothes/:id', deleteClothes); 


// async function getClothes(req,res) {
//     const allClothes = await Clothes.findAll();
//     res.status(200).json(allClothes);
//     console.log('test workedn');
//     console.log(allClothes);
// }
// async function getOneClothes(req,res) {
//     const id = parseInt(req.params.id);
//     const oneclothes = await Clothes.findOne({
//         where: {
//             id:id
//         }
//     });
//     res.status(200).json(oneclothes);
    
// }
// async function createClothes(req,res) {
//     const obj = req.body;
//   let clothes = await Clothes.create(obj);
//   res.status(201).json(clothes);
// }
// async function updateClothes(req,res) {
//     const id = parseInt(req.params.id);
//     const obj = req.body;
//     let foundclothes = await Clothes.findOne({ where: { id: id } });
//     const updatedclothes = await foundclothes.update(obj);
//     res.status(201).json(updatedclothes);
// }
// async function deleteClothes(req,res) {
//     const id = parseInt(req.params.id);
//     const deleteclothes = await Clothes.destroy({where:{id:id}});
//     res.status(204).json(deleteclothes);
// }

// module.exports = clothesRouter;