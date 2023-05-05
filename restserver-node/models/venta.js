const { Schema, model } = require('mongoose');

const VentaSchema = Schema({
    estado: {
        type: String,
        required: [ true, 'El estado de la venta es obligatorio' ],
        enum: [ 'EN_CURSO', 'ENTREGADO'],
        default: 'EN_CURSO'
    },
    fecha: {
        type: Date,
        required: [ true, 'La fecha de la venta es obligatoria'],
        default: Date.now
    },
    fecha_entrega: {
        type: Date,
        required: [ true, 'La fecha de entrega es obligatoria'],
        default: () => {
            let today = new Date();
            today.setDate( today.getDate() + 5 )
            return today;
        }
    },
    usuario_vendedor: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [ true, 'El usuario al que está asociado el vendedor es obligatorio' ]
    },
    usuario_comprador: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [ true, 'El usuario al que está asociado la compra es obligatorio' ]
    },
});

module.exports = model( 'Venta', VentaSchema );