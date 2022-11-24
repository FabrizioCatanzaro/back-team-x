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
            "photo":[
                "https://upload.wikimedia.org/wikipedia/commons/a/a7/Beijing_International_Convention_Center_%2820200810181819%29.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/e/e1/Chaoyang%2C_Beijing_IMG_4436_Beijing_Intl_Convention_Center.jpg",
                "https://ak-d.tripcdn.com/images/200i16000000z6d3fE2AB_Z_1100_824_R5_Q70_D.jpg"
                ],
<<<<<<< HEAD
            "description":"Es un hotel de prueba para testear",
            "capacity":20000,
            "citiId":"6372ff7e1f2df6469dfdf855",
            "userId":"6372d48e597d27b935de7568"
=======
                "capacity": 20000,
            "description":"Es un hotel demasiado lindo",
            "userId":"6372d48e597d27b935de7568",
            "citiId":"6372ff7e1f2df6469dfdf856",
>>>>>>> 70c053ddd1d80fec67855f8f933c9922117e250e
            }
            
            request(app)
            .post("/api/hotels")
            .send(testHotel)
            .expect(response => {
                assert.typeOf(response.body.body.capacity, "number", "its a number")
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
