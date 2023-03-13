module.exports = mongoose => {
    const Producto = mongoose.model(
      "productos",
      mongoose.Schema(
        {
            "nombre" :String,
            "tamanio" : Number,
            "precioUnitario": Number,
            "descripcion": String,
        },
        { timestamps: true }
      )
    );
  
    return Producto;
};
