const mongoose = require('mongoose');
const {mongodb} = require('./config');



const connection = mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`)
    .then((db) => {
        console.log('conexion establecida')
    }).catch((err) => {
        console.log('ha ocurrido un error' + err)
    })



module.exports = connection