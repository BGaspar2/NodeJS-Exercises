module.exports = app => {
    const productos = require("../controllers/producto.controller");
    var router = require("express").Router();
     
    router.get("/", productos.saludos);
    router.post("/", productos.create);

    //listado de productos
    router.get("/todos", productos.getAll);

    //Mostrar un producto
    router.get("/:id", productos.getOne);

    //actualizar un producto
    router.put("/:id", productos.update);

    //eliminar un producto
    router.delete("/:id", productos.delete);

    //ruta principal de la API
    app.use('/api/productos', router);
};
  