const { response } = require("express");
const { Producto, Venta } = require('../models');

const crearVenta = async ( req, res = response ) => {
    try{
        const { estado, fecha, fecha_entrega, usuario_comprador, productos, ...body } = req.body;

        //!Generar Data que se va a almacenar
        const data = {
            productos,
            ...body,
            usuario_comprador: req.usuario._id,
        };
        for( const prod of productos ){
            const { producto, cantidad } = prod;
            const productoElegido = await Producto.findById( producto._id );
            productoElegido.existencia = productoElegido.existencia - cantidad;
            if( productoElegido.existencia === 0 ){
                productoElegido.estado = false;
            }
            await productoElegido.save();
        }

        const venta = new Venta( data )

        //?GuardarDB

        await venta.save();

        res.status( 201 ).json( venta );
    } catch( err ){
        console.log( err )
        res.status( 500 ).json({
            err: 'Existe un error al ejecutar la consulta en el servidor'
        });
    }

}

const seguimientoPedidos = async ( req, res = response ) => {
    const query = { usuario_comprador:  req.usuario };

    const ventas = await Venta.find( query )
                            .select('estado productos.producto fecha_entrega')
                            .populate('productos.producto','nombre')


    res.status( 200 ).json( ventas )
}

module.exports = {
    crearVenta,
    seguimientoPedidos
}