'use strict'
//agregarmos el modelo
var Favorito = require('../model/favorito');

//es una funcion
function prueba(req, res){
var  nombre = req.params.nombre;
if (req.params.nombre){
    var nombre = req.params.nombre;
}else{
    var nombre = "sin nombre";
}
res.status(200).send({
data:[3,2,5], message:"hola jaime"+nombre

});

}

//crud para el objeto favorito

//listar todos los datos
//obtener todos
function getFavoritos(req, res){
	//desde el modelo y su schema Employee obtenga los datos
	Favorito.find({ }).sort('-name').exec((err, favorito)=>{
		if (err){
			res.status(500).send({message: 'error al devolver datos'});
		}else{
			if (!favorito){
				res.status(404).send({message: 'no existen datos'});
			}else{
				res.status(200).send({favorito});
			}
			
		}
		
	});
}
//guardar
function saveFavorito(req, res){
    //crear un ojbeto para guardarlo
    var favorito = new Favorito();
    //los parametros de las variables
    var params = req.body; //representa el formulario o cuerpo de la pagina web
    //para guardar mediante el post todos los parametos y lueog lo convierte en json
    favorito.name = params.name;
    favorito.email = params.email;
    favorito.phoneNumber= params.phoneNumber;

    //guardar
    favorito.save((err,favoritoStored)=>{
        if(err){
            res.status(200).send({message:'error al guardar'});
        }
        res.status(200).send({favorito:favoritoStored}); //devolvemos lo que se va a guardar
    });
}


//editar
function updateFavorito(req,res){

    var id = req.params.id; //parametro desde la pagina web o http
    var params = req.body; //body representa a un formulario 
    console.log(params)
    //voy a buscar el objeto
    //y con el put vamos a modificar datos encontrador
    //una funcion flecha recibo los datos y genero el update

    Favorito.findByIdAndUpdate(id, params, (err, favoritoUpdate)=>{
        if(err){
            res.status(200).send({message: 'error al actualizar datos'});
        }
        res.status(200).send({favorito:favoritoUpdate}); //devolvemos los datos que van a guardarse
    });

}
//eliminart
function deleteFavorito(req,res){
    var id = req.params.id; //parametro desde la pagina web o http

    Favorito.findByIdAndDelete(id, function(err, favorito){
        if (err){
            res.status(500).send({message: 'error al eliminar dato'});
        }
        if (!favorito){
            res.status(404).send({message: 'error no existe dato'});
        }else{
            favorito.remove(err =>{
                if(err){
                    res.status(500).send({message: 'error al eliminar dato'});
                }else{
                    res.status(200).send({message: 'dato eliminado'});
                }

            });

        }

    });
     
}


//esportar la funcion comoun ojbeto con sus respectivos metodos o funciones
module.exports={
    prueba,
    getFavoritos, 
    saveFavorito,
    updateFavorito,
    deleteFavorito
}