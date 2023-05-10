const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos,
        validarJWT } = require('../middlewares');
const { crearVenta, seguimientoPedidos } = require('../controllers/venta.controller');


const router = Router();


//? Crear venta - privado - cualquier persona con un token valido
router.post('/', [
    validarJWT,
    validarCampos
], crearVenta );

router.get('/', [
    validarJWT,
], seguimientoPedidos );

module.exports = router;