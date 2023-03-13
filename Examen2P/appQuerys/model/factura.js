'use strict'
var mongoose = require('mongoose');
//definir el objeto u objetos que van a trabajar con la bdd mongo
var schema = mongoose.Schema;

//objeto
var factura = schema(
    {
        Cliente: 
        {
            tipo: {type:String},
            apellido: {type:String},
            nombre: {type:String},
            ciudad: {type:String},
            cuit: {type:Number}
        },
        tipodePago:{type:String},
        fechaEmision:{type: Date},
        item: 
        [{
            album: String,
            año: Number,
            cantidad: Number,
            precio: Number,
            artista: String
        }], 
        
        nroFactura:{type:String},
        intereses: {type: Array}
},
{
    collection:'facturas'
})
//exportamos el modulo
module.exports=mongoose.model('factura',factura);
