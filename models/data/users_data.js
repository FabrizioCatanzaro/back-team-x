let users = [{
    id: 'user1',
    name: 'Lionel',
    lastName: 'Messi',
    age: '36',
    email: 'lionelmessi@gmail.com',
    password: 'thiagoymateo7',
    code: 'papel-piedra-tijera',
    verified: true,
    logged: true
},
{
    id: 'user2',
    name: 'Rodrigo',
    lastName: 'Palacio',
    age: '37',
    email: 'rodrigopalacio@gmail.com',
    password: 'rodrigopalsd',
    code: 'nutriapapelrio',
    verified: true,
    logged: true
},
{
    id: 'user3',
    name: 'Gonzalo',
    lastName: 'Higuain',
    age: '20',
    email: 'pipitacrack@gmail.com',
    password: 'hola1234',
    code: 'bacnogalicia123',
    verified: true,
    logged: true
},
{
    id: 'user4',
    name: 'Emiliano',
    lastName: 'Martinez',
    age: '39',
    email: 'eldibumartinez@gmail.com',
    password: 'copaamerica21',
    code: 'perrogatociencia',
    verified: true,
    logged: true
},
]



require ('dotenv').config()
require ('../../config/database/database')


const user_model = require('../Model_User')

users.forEach((element)=>{
    user_model.create({
        id:element.id,
        name:element.name,
        lastName:element.lastName,
        age:element.age,
        email:element.email,
        password:element.password,
        code:element.code,
        verified:element.verified,
        logged:element.logged,
    })
})

module.exports = user_model