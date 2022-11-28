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

describe('POST a new city', function(){

    it('Should be a string in the name field', function(done){

    const cityTest = {
        name: "Ciudad de Prueba",
        continent: "Europe",
        photo: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        population: 312312,
        userId: "63813795343a278f1fad3cce",
    }

        request(app)
            .post('/api/cities')
            .send(cityTest)
            .expect(response => {
                assert.typeOf(response.body.body.name, 'string', 'should be a string')
            })
            .end(function(err,res){
                if(err){
                    return done(err)
                }
                done()
            })
    })

    it('Status code should be of 400 when city cannot be created', function(done){

        const cityTest = {
            name: "Ciudad de Prueba",
            continent: "Europe",
            photo: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            population: 123,
            userId: "cualquierID",
        }
    
            request(app)
                .post('/api/cities')
                .send(cityTest)
                .expect(response => {
                    assert.equal(response.status, 400, 'should be 400 status code')
                })
                .end(function(err,res){
                    if(err){
                        return done(err)
                    }
                    done()
                })
        })
})



describe('DELETE a city', function(){

    it("Delete a city successfully", function (done) {
        token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2ZmMTZhYWFmZjRiMTlmYmI1OGUxOSIsImlhdCI6MTY2OTU5MTE2OCwiZXhwIjoxNjY5Njc3NTY4fQ.Jma51U-Z0XQrN0-coBBYcKFtKmqggiuRRMgAsqFERFo"
        idCity= '63843d31fa013a1418be9e17'
        request(app)
            .delete(`/api/cities/${idCity}`)
            .auth(token, { type: "bearer" })
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
})