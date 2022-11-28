const app = require('../app')
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

describe('GET /hotels', function(){
    it('should be 404 status',function(done){
        request(app)
        .get('/hotels?name=asdasda')
        .expect(res=>{
            let response = res.status
            assert.strictEqual(response,404)
        })
        .end((err, res) => {
            if(err){
                return done(err)
            }
            return done()
        })
    })    
})


describe('Post Hotels', ()=>{
    it('The field capacity is a number', (done) => {

        const testHotel = {
            "name":"New Hotel",
            "photo":"https://upload.wikimedia.org/wikipedia/commons/a/a7/Beijing_International_Convention_Center_%2820200810181819%29.jpg", 
            "description":"Es un hotel de prueba para testear",
            "capacity":20000,
            "userId":"637ff16aaaff4b19fbb58e19",
            "citiId":"6372ff7e1f2df6469dfdf856",
            }
            
            request(app)
            .post("/api/hotels")
            .send(testHotel)
            .expect(res => {
                assert.isNumber(res.body.body.capacity)
            })
            .expect(201)
            .end(function (err) {
                if (err){
                    return done(err);
                } 
                done();
            });
    })
})

describe('DELETE a show', function(){

    it("Delete a show successfully", function (done) {
        token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2ZmMTZhYWFmZjRiMTlmYmI1OGUxOSIsImlhdCI6MTY2OTU5MTE2OCwiZXhwIjoxNjY5Njc3NTY4fQ.Jma51U-Z0XQrN0-coBBYcKFtKmqggiuRRMgAsqFERFo"
        idShow = '638405bb1904171cb2ffcd84'
        request(app)
            .delete(`/api/shows/${idShow}`)
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
