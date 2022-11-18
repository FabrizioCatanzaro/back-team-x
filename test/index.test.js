const app = require('../app')
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

// Describe -> agrupar test cases
describe('GET /api/cities', function(){

    // It -> test cases
    it('Deberia ser un array de objetos', function(done){
        
        request(app)
            .get('/api/cities/')
            .expect(response => {
                assert.typeOf(response.body.response, 'array', 'Deberia ser un array')
                assert.typeOf(response.body.response[0], 'object', 'Deberian ser objetos')
            })
            .end(function(err, res){
                if (err){
                    return done(err)
                }
                done()
            })
    })    
})