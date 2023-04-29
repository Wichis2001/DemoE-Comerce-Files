const { Role,
        Usuario } = require('../models')

const esRolValido = async ( rol = '' ) => {
    const existeRol = await Role.findOne( { rol });

    if( !existeRol ){
        throw new Error( `El rol ${ rol } no esta registrado en la BD`);
    };

};

const usernameExiste = async ( nombre = '' ) => {

    const existeUsername = await Usuario.findOne( { nombre } );

    if( existeUsername ){
        throw new Error( `El username: ${ nombre } ya está registrado` );
    }
}

const coleccionesPermitidas = ( coleccion = '', coleccionesPermitidas = [] ) => {

    const incluida = coleccionesPermitidas.includes( coleccion );

    if( !incluida ){
        throw new Error(`La colección ${ coleccion } no es permitida, ${ coleccionesPermitidas }`)
    }

    return true;
}

module.exports = {
    coleccionesPermitidas,
    esRolValido,
    usernameExiste
}