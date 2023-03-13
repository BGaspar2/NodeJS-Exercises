'use strict'
//cargar el modulo de express
var express = require('express');
//body parser para manejar parametros
var bodyParser= require('body-parser');
//llamar al paquete express
var app=express();
//agregar o unir con la carpeta de rutas (routes)
var api = require('./routes/routes'); //carga todas las routes
//llamar al paquete bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//vamos a cargar una funcion que se lanza cada vez
//que consumamos el api
//next parametro para salir de la funcion
app.use((req,res,next)=>{
    //con este codigo se indica que cualquiera
    // puede hacer peticiones a mi api rest
    res.header('Access-Control-Allow-Origin','*');
    //headers que le pueden llegar
    res.header('Access-Control-Allow-Headers','X-API-KEY, Origin, X-Requested-With, Content-Type,Accept,Access-Control-Request-Method');
    //ahora los metodos http que nos pueden llegar desde http
    res.header('Access-Control-Allow-Headers','GET, POST,OPTIONS,PUT,DELETE');
    //CABECERA
    res.header('Allow', 'GET, POST, OPTIONES, PUT, DELETE');
    //
    next();
});





//la ruta principal para la app 
//ejemplo: http://localhost:3678/api/--agregar recurso--
app.use('/api', api); // a partir de aqui se carga todas la funciones y rutas
//para poder importar el fichero que es un modulo
module.exports = app;