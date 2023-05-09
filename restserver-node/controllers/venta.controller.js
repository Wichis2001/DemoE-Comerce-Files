const { response } = require("express");
const { Producto, Venta } = require('../models');

const crearVenta = async ( req, res = response ) => {

    try{
        const { estado, fecha, fecha_entrega, usuario_comprador, productos, ...body } = req.body;

        //!Generar Data que se va a almacenar
        const data = {
            ...body,
            usuario_comprador: req.usuario._id,
        };

        for( const producto of productos ){
            const productoElegido = await Producto.findById( producto._id );
            productoElegido.existencia = productoElegido.existencia - producto.cantidad;
            if( productoElegido.existencia === 0 ){
                productoElegido.estado = false;
            }
            await productoElegido.save();
        }

        const venta = new Producto( data )

        //?GuardarDB

        await venta.save();

        res.status( 201 ).json( venta );
    } catch( err ){
        res.status( 500 ).json({
            err: 'Existe un error al ejecutar la consulta en el servidor'
        });
    }

}

module.exports = {
    crearVenta
}