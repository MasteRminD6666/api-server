"use strict";
const validator = require('../src/middleware/validator');

describe('validatorMiddleware test',() => {
    let consoleSpy
    let req = {
        query:[]
    };
    let res={};
    let next= jest.fn();

    beforeEach(() =>{

        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })
    afterEach(() =>{
        consoleSpy.mockRestore();
    })
  test('should contain a Log', async () => {
    validator(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  })
})