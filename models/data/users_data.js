let admins = [
    {
        name: "Franco",
        lastName: "Rodriguez",
        role:"admin",
        photo:'https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg',
        age:25,
        email: "fran.rodriguez@gmail.com",
        password: "Fran2020",
        country:"EspaÃ±a",
        code: "ax20mt99ss21",
        verified: true,
        logged: true,
    },
    {
        name: "Ignacio",
        lastName: "Gonzalez",
        role:"admin",
        photo:'https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg',
        age:22,
        email: "IgnaGonzalez@hotmail.com",
        password: "Caramelo17",
        country:"Mexico",
        code: "gg19fr10aqxc",
        verified: true,
        logged: true,
    },
    {
        name: "Diego",
        lastName: "Ramirez",
        role:"admin",
        photo:'https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg',
        age:30,
        email: "dieguito_ramirez@gmail.com",
        password: "DG2021",
        country:"Colombia",
        code: "xx10cv12s887",
        verified: true,
        logged: true,
    },
    {
        name: "Mauro",
        lastName: "Rosas",
        role:"admin",
        photo:'https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg',
        age:22,
        email: "MauR@gmail.com",
        password: "Arboleda10*",
        country:"Argentina",
        code: "b102hy2312mm",
        verified: true,
        logged: true,
    }
]



require ('dotenv').config()
require ('../../config/database/database')


const User_model = require('../Model_User')

admins.forEach((element)=>{
    User_model.create({
        id:element.id,
        name:element.name,
        lastName:element.lastName,
        role:element.role,
        photo:element.photo,
        age:element.age,
        email:element.email,
        password:element.password,
        country:element.country,
        code:element.code,
        verified:element.verified,
        logged:element.logged,
    })
})

module.exports = User_model