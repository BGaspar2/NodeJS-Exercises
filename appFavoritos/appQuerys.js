//variable y conexion a bdd
const mongoose = require('mongoose');
//conection
mongoose.connect('mongodb://127.0.0.1:27017/test',{
});
//referencia a ala base de datos
var db = mongoose.connection;
//si existe error
db.on('error', console.error.bind(console,'error en la conexcion'));
//sino agrega datos
//funcion
db.once('open',function(){
    //1.- conexion
    console.log("conexion correcta");
    //2.-definimos Schema
    var BookSchema = mongoose.Schema({
        name:String,
        price:Number,
        quantity:Number
    });
    //3.-compilamos el schema a modelo
    var Book = mongoose.model('Book',BookSchema,'bookstore');
//BUSQUEDA
    //4.-query sin filtro
    Book.find({},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("busqueda: ",docs);
        }
    });

    //query con parametros
    Book.find({price:15},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("busqueda precio: ",docs);
        }
    });

    //query con condicionales
    Book.find({price:{$gte:1000}},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("busqueda precio mayores a 1000: ",docs);
        }
    })

    //4. generar una instancia del documento
     //.4.1- varios datos de la coleccion utilizando una rraya
   // var book1 = new Book({name:'Jaime Sayago', price:10,quantity:25});
   /*var books = [{name:'Juan', price:80,quantity:225},
                {name:'JPedro', price:100,quantity:5},
                {name:'Pablo', price:1015,quantity:785}];
    //5.- guardar documento/model/objeto
    Book.collection.insert(books,function(err,docs){
        if (err){
            return console.log(err);
        }else{
            console.log("multiples datos insertados en la coleccion");
        }
    });*/
    /*book1.save(function(err,book){
        if (err)
            return console.error;
        console.log(book.name+"info guardado en coleccion bookstore");
    });*/

});
