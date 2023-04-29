const fs   = require('fs');

const { response } = require('express');

const { subirArchivo } = require('../helpers');
const { Usuario } = require('../models');

const cargarArchivo = async ( req, res = response ) => {

    try{
      //const nombre = await subirArchivo( req.files, [ 'txt', 'md' ], 'textos' );
      const nombre = await subirArchivo( req.files, undefined, 'imgs' );
      res.json({ nombre });
    } catch( msg ){
      res.status( 400 ).json({ msg })
    }


}

const actualizarImagen = async ( req, res = response ) => {

  const { id, coleccion } = req.params;

  let modelo;

  switch ( coleccion ) {
      case 'usuarios':

        modelo = await Usuario.findById( id );
        if( !modelo ){
          return res.status( 400 ).json({ msg: `No existe un usuario con el id: ${ id }`})
        }

      break;

    case 'productos':

        modelo = await Producto.findById( id );
        if( !modelo ){
          return res.status( 400 ).json({ msg: `No existe un producto con el id: ${ id }`})
        }

      break;

    default:
      return res.status(500).json({ msg: 'Se me olvido validar esta colección' });
  }

  try{
    //!Limpiar imágenes previas
    if( modelo.img ){
      //?Hay que borrar la imagen del servidor
      const pathImagen = path.join( __dirname, '../uploads', coleccion, modelo.img );
      if( fs.existsSync( pathImagen ) ){
        fs.unlinkSync( pathImagen );
      }
    }

    modelo.img = await subirArchivo( req.files, undefined, coleccion );
    await modelo.save();

    res.json( modelo );

  } catch( msg ){
    res.status( 400 ).json({ msg })
  }

};

const mostrarImagen = async ( req, res = response ) => {

  const { id, coleccion } = req.params;

  let modelo;

  switch ( coleccion ) {
      case 'usuarios':

        modelo = await Usuario.findById( id );
        if( !modelo ){
          return res.status( 400 ).json({ msg: `No existe un usuario con el id: ${ id }`})
        }

      break;

    case 'productos':

        modelo = await Producto.findById( id );
        if( !modelo ){
          return res.status( 400 ).json({ msg: `No existe un producto con el id: ${ id }`})
        }

      break;

    default:
      return res.status(500).json({ msg: 'Se me olvido validar esta colección' });
  }

  if( modelo.img ){
    //?Regreso la imágen dado que esta ya existe
    const pathImagen = path.join( __dirname, '../uploads', coleccion, modelo.img );
    if( fs.existsSync( pathImagen ) ){
      return res.sendFile( pathImagen );
    }
  }

  //!Mandar está imágen de relleno si esta no se encuentra
  const pathImagen = path.join( __dirname, '../assets/no-image.jpg' );
  res.sendFile( pathImagen );

}

module.exports = {
    actualizarImagen,
    cargarArchivo,
    mostrarImagen
}