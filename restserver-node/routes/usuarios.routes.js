const { Router } = require('express');
const { check } = require('express-validator');

const { esRolValido,
        usernameExiste } = require('../helpers');

const { validarCampos } = require('../middlewares');

const { usuariosGet,
        usuariosPost,
        usuariosPut,
        usuariosPatch,
        usuariosDelete } = require('../controllers/usuarios.controllers');

const router = Router();

router.get('/', usuariosGet);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y debe de contener más de 6 caracteres').isLength( { min: 6 } ),
    check('nombre').custom( usernameExiste ),
    check('rol').custom( esRolValido ),
    validarCampos
], usuariosPost);

router.put('/:id', usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);

module.exports = router;