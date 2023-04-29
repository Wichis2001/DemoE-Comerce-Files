const { response, request, json } = require("express");

const bcryptjs = require('bcryptjs');

const { Usuario } = require('../models');
const { generarJWT } = require("../helpers");

const login = async (req = request, res = response) => {

   try{

        const { nombre, password } = req.body;

        //!Verificar si el username existe
        const usuario = await Usuario.findOne( { nombre } );

        if( !usuario ){

            return res.status( 400 ).json({
                msg: 'Usuario / Password no son correctos - correo'
            });

        }

        //?Si el usuaario existe
        if( !usuario.estado ){

            return res.status( 400 ).json({
                msg: ' Usuario / Password no son correctos - estado: false'
            });

        }

        //!Validar la constraseña
        const validPassorword = bcryptjs.compareSync( password, usuario.password);

        if( !validPassorword ){

            return res.status( 400 ).json({
                msg: ' Usuario / Password no son correctos - password'
            });

        }

        //*Generar el JWT
        const token = await generarJWT( usuario.id );

        res.json({
            usuario,
            token
        });

   } catch( err ) {
        console.log( err );
        return res.status(500).json({
            msg: 'Hable con el administrador'
        })
   }
}

module.exports = {
    login
}