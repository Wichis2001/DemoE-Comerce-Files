const { response } = require("express");
const { Producto, Categoria, Usuario } = require('../models');


const crearProducto = async ( req, res = response ) => {

    const { estado, aprobado, usuario, ...body } = req.body;

    const nombre = req.body.nombre.toUpperCase();

    //!Generar Data que se va a almacenar
    const data = {
        ...body,
        nombre,
        usuario: req.usuario._id,
    };

    const producto = new Producto( data )

    //?GuardarDB

    await producto.save();

    res.status( 201 ).json( producto );
}

const obtenerProductos = async ( req, res = response ) => {

    const query = { estado: true, aprobado: true };

    const productos = await Producto.find( query )
                                    .populate('usuario', '_id')
                                    .populate('usuario', 'nombre')
                                    .populate('categoria','nombre')


    res.status( 200 ).json( productos )

}

module.exports = {
    crearProducto,
    obtenerProductos
}