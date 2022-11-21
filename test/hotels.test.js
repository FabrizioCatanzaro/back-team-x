const app = require('../app')
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

describe('GET /hotels', function(){



    it('should be 404 status',function(done){
        request(app)
        .get('/hotels?name=afg')
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

    it('The field capacity is a number', function (done) {
        request(app)
            .post(`/api/hotels/`)
            .send({
                "name": "meli",
                "photo": [
                    "https://upload.wikimedia.org/wikipedia/commons/a/a7/Beijing_International_Convention_Center_%2820200810181819%29.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/e/e1/Chaoyang%2C_Beijing_IMG_4436_Beijing_Intl_Convention_Center.jpg",
                    "https://ak-d.tripcdn.com/images/200i16000000z6d3fE2AB_Z_1100_824_R5_Q70_D.jpg"
                ],
                "capacity": 20000,
                "cityId": "636d975fff2f61c6a45710b2",
                "userId": "636d82c86529ebe93bbef921"
            })
            .expect(res => {
                assert.isNumber(res.body.capacity)
            })
            .end(function (err) {
                if (err) return done(err);
                done();
            });
    })

//END    
})

