const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos,
        validarJWT } = require('../middlewares');
    
const { existeCategoria,
        validarPrecio,
        validarExistencia} = require('../helpers');
const { crearProducto,
        obtenerProductos } = require('../controllers/producto.controller');

const router = Router();

//!Obtener todas las categorias - privado
router.get( '/', obtenerProductos );

//? Crear categoria - privado - cualquier persona con un token valido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    check('precio', 'El precio no es valido').isFloat().custom( validarPrecio ),
    check('existencia', 'La existencia ingresada no es valida').isInt().custom( validarExistencia ),
    check('categoria', 'No es un ID válido').isMongoId(),
    check('categoria').custom( existeCategoria ),
    validarCampos
], crearProducto );

module.exports = router;