'use strict'
//agregarmos el modelo
var Factura = require('../model/factura');
//es una funcion
function facturaN(req, res){
var  nroFactura = req.params.nroFactura;
if (req.params.nroFactura){
    var nroFactura = req.params.nroFactura;
}else{
    var nroFactura = "sin nroFactura";
}
res.status(200).send({
 message:"hola su numero de factura es:  "+nroFactura

});
}

//crud para el objeto favorito
//listar todos los datos
//obtener todos


function getFacturas(req, res){
	//desde el modelo y su schema Employee obtenga los datos
	Factura.find({ }).sort('-nroFactura').exec((err, factura)=>{
		if (err){
			res.status(500).send({message: 'error al devolver datos'});
		}else{
			if (!factura){
				res.status(404).send({message: 'no existen datos'});
			}else{
				res.status(200).send({factura});
			}
		}
	});
}
//guardar
function saveFactura(req, res){
    //crear un ojbeto para guardarlo
    var factura = new Factura();
    //los parametros de las variables
    var params = req.body; //representa el formulario o cuerpo de la pagina web
    //para guardar mediante el post todos los parametos y lueog lo convierte en json
    factura.Cliente = params.Cliente;
    factura.tipodePago = params.tipodePago;
    factura.fechaEmision = params.fechaEmision;
    factura.item = params.item;
    factura.nroFactura  = params.nroFactura;
    factura.intereses  = params.intereses;
    //guardar
    factura.save((err,facturaStored)=>{
        if(err){
            res.status(200).send({message:'error al guardar'});
        }
        res.status(200).send({factura:facturaStored}); //devolvemos lo que se va a guardar
    });
}


//editar
function updateFactura(req,res){
    var id = req.params.id; //parametro desde la pagina web o http
    var params = req.body; //body representa a un formulario 
    console.log(params)
    //voy a buscar el objeto
    //y con el put vamos a modificar datos encontrador
    //una funcion flecha recibo los datos y genero el update
    Factura.findByIdAndUpdate(id, params, (err, facturaUpdate)=>{
        if(err){
            res.status(200).send({message: 'error al actualizar datos'});
        }
        res.status(200).send({factura:facturaUpdate}); //devolvemos los datos que van a guardarse
    });
}
//eliminar
function deleteFactura(req,res){
    var id = req.params.id; //parametro desde la pagina web o http
    Factura.findByIdAndDelete(id, function(err, factura){
        if (err){
            res.status(500).send({message: 'error al eliminar dato'});
        }
        if (!factura){
            res.status(404).send({message: 'error no existe dato'});
        }else{
            factura.remove(err =>{
                if(err){
                    res.status(500).send({message: 'error al eliminar dato'});
                }else{
                    res.status(200).send({message: 'dato eliminado'});
                }
            });
        }
    });   
}


//exportar la funcion comoun objeto con sus respectivos metodos o funciones
module.exports={
    facturaN,
    getFacturas, 
    saveFactura,
    updateFactura,
    deleteFactura
}