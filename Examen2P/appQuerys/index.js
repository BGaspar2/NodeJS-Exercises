'use strict'

var mongoose = require('mongoose');
//importar o unir con el fichero app.js
var app = require('./app'); //configuracion
 //modificar el puerto para produccion
var port = process.env.port || 3678;
//conexion a base de datos
mongoose.connect('mongodb://localhost:27017/examenFactura',{useNewUrlParser:true, useUnifiedTopology:true},
(err,res)=>{
    if(err){
        throw err;
    }else{
        console.log('conexion a mongo correcta');
        app.listen(port, function(){
            console.log(`API REST FACTURA FUNCIONANDO en ${port} `);
         });
    }
});