'use strict'
const request = require('supertest');
const app = require('../../app/myapp.js');
const chai = require('chai');
var assert = chai.assert;


describe ("This is test apis with given query param ",function(){
    it("it returns respose with correct app name ",function(done){
        request(app)
        .get('/query/mydata/')
        .expect(200)
        .then(response => {
            console.log(response.text);
            assert.equal(response.text, "mydata");
            done()
        })
        
     })
})
