const db = require("../models");

const Producto = db.productos;


exports.saludos = (req, res) => {
   
    return res.send({mensaje: "Hola primera API de productos..."});
}


exports.create = async (req, res) => {

    //console.log ("contenido: ", req.body);
    const producto = new Producto ({
        nombre : req.body.nombre,
        tamanio: req.body.tamanio,
        precioUnitario: req.body.precioUnitario,
        descripcion: req.body.descripcion
    });

    await producto.save()
        .then( data => {
            res.send( data);
        })
        .catch (err => {
            res.send({estado: false, mensaje: err.message});
        });
}



exports.getAll = async (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { $regex: new RegExp(nombre), $options: "i" } } : {};
    Producto.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving productos."
        });
      });
};


exports.getOne = async (req, res) => {
    const id = req.params.id;
    Producto.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Producto with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Producto with id=" + id });
      });
}



exports.update = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
      const id = req.params.id;
      Producto.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Producto with id=${id}. Maybe Producto was not found!`
            });
          } else res.send({ message: "Producto was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Producto with id=" + id
          });
        });

}



exports.delete = (req, res) => {
    const id = req.params.id;
    Producto.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Producto with id=${id}. Maybe Tutorial was not found!`
          });
        } else {
          res.send({
            message: "Producto was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Producto with id=" + id
        });
      });
};

