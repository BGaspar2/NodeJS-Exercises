'use strict'
var express = require('express');
var api= express.Router();

//agregar nuestro objeto a la ruta
var Objeto = require('../controllers/controlador');


//url rutas
//localhost:/funciones
api.get('/prueba/:nombre?',Objeto.prueba);
api.get('/favoritos', Objeto.getFavoritos);
api.post('/favorito', Objeto.saveFavorito);
api.put('/favorito/:id', Objeto.updateFavorito);
api.delete('/favorito/:id', Objeto.deleteFavorito);

module.exports=api;