'use strict';
const server=require('../src/server.js');
const supertest=require('supertest');

const { db } = require('../src/models/index');

const request=supertest(server.app);
jest.setTimeout(8000)

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});


describe('Web server', () => {

  let id;


it('Post method', async () => {
  const Obj = {
    name: 'test',
    type: 'test'
  };
  const response = await request.post('/clothes').send(Obj);
  
 
  expect(response.status).toEqual(201);
  expect(  response.body.favariteFood1).toBe(Obj.favariteFood1);
  expect(response.body.favariteFood2).toBe(Obj.favariteFood2);
});



it('put methd ', async() =>{

const Obj = {
      name: 'test'
   
    };
    const response = await request.put(`/clothes/1`).send(Obj);
    expect(response.status).toEqual(201);



})

it('get method to all',async()=>{

const response= await request.get('/food')
expect(  response.status).toEqual(200)
expect(typeof response.body).toEqual('object')


})

it('it can get method  ',async()=>{
const response= await request.get('/food/1')
expect(  response.status).toEqual(200)
expect(typeof response.body).toEqual('object')

})

it('can delete method ',async()=>{

const response= await request.delete('/food/5')
expect(  response.status).toEqual(204)


})


});