const { response } = require("express");
const { Tarjeta } = require('../models');


const crearTarjeta = async ( req, res = response ) => {

    const { tarjeta, ...body } = req.body;

    //!Generar Data que se va a almacenar
    const data = {
        usuario: req.usuario._id,
        tarjeta
    };

    const tarjetaUsuario = new Tarjeta( data )

    //?GuardarDB
    await tarjetaUsuario.save();

    res.status( 201 ).json( tarjetaUsuario );

}

const obtenerTarjeta = async( req, res = response ) => {

    const query = { usuario: req.usuario._id };
    const tarjeta = await Tarjeta.find( query )
                                    .populate('usuario', '_id')
                                    .populate('usuario', 'nombre')

    res.status( 200 ).json( tarjeta )
}

module.exports = {
    crearTarjeta,
    obtenerTarjeta
}