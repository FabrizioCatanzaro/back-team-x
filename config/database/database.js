const mongoose = require('mongoose')

let connection = async() => {
    try {
        mongoose.connect(
            //link de conexion a base de datos
            process.env.LINK_DB,
            //objeto con configuraciones de conexiones
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }
        )
        console.log('connected to database');
    } catch (error){
        console.log(error.message)
    }
}

connection()