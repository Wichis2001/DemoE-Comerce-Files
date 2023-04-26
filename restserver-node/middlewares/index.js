const validarCampos = require('./validar-campos');
const validarRoles = require('./validar-roles');
module.exports = {
    ...validarCampos,
    ...validarRoles
}