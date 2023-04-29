const { request, response } = require('express')
const jwt = require('jsonwebtoken');
    
const { Usuario } = require('../models');

const validarJWT = async ( req = request, res = response, next ) => {

    const token = req.header( 'x-token' );

    if( !token ){
        return res.status( 401 ).json({
            msg: 'No hay token valido para realizar la petición'
        });
    }

    try{

        const { uid } = jwt.verify( token, process.env.SECRETEORPRIVATEKEY );

        const usuario = await Usuario.findById( uid );

        if( !usuario ){
            return res.status( 401 ). json({
                msg: 'Token no válido - usuario no existe DB'
            });
        }

        //Verificar si el uid tiene estado en true
        if( !usuario.estado ){
            return res.status( 401 ). json({
                msg: 'Token no válido - usuario con estado: false'
            });
        }

        req.usuario = usuario;

        next();

    } catch( err ){
        console.log( err );
        res.status( 401 ).json({
            msg: 'Token no válido'
        });
    }

}

module.exports = {
    validarJWT
}