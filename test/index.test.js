const app = require('../app')
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

// Describe -> agrupar test cases
describe('GET /api/cities', function(){

    // It -> test cases
    it('Should be an array of objects', function(done){
        
        request(app)
            .get('/api/cities/')
            .expect(response => {
                assert.typeOf(response.body.response, 'array', 'Should be an array')
                assert.typeOf(response.body.response[0], 'object', 'Should be objects')
            })
            .end(function(err, res){
                if (err){
                    return done(err)
                }
                done()
            })
    })    
})