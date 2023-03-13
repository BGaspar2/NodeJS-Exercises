'use strict'
var express = require('express');
var api= express.Router();
//agregar nuestro objeto a la ruta
var Objeto = require('../controllers/controlador');


//url rutas
//localhost:/funciones
api.get('/facturaN/:nroFactura?',Objeto.facturaN);
api.get('/facturas', Objeto.getFacturas);
api.post('/factura', Objeto.saveFactura);
api.put('/factura/:id', Objeto.updateFactura);
api.delete('/factura/:id', Objeto.deleteFactura);

module.exports=api;