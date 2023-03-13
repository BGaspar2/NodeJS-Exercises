'use strict'

var mongoose = require('mongoose');

//definir el objeto u objetos que van a trabajar con la bdd mongo

var schema = mongoose.Schema;

//objeto
var favorito = schema({
    name:{type:String},
    email:{type:String},
    phoneNumber:{type:Number}
},
{
    collection:'favoritos'
})
//exportamos el modulo
module.exports=mongoose.model('favorito',favorito);
