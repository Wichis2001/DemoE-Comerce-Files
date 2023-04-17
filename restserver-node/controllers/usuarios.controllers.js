const { response, request } = require('express')

const usuariosGet = ((req = request, res = response) => {
    const {q, nombre = 'No name', apikey, page = 1, limit} = req.query;
    res.json({
        msg: 'get Api - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
});

const usuariosPost = ((req, res = response) => {
    //!Pequeña validación
    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'post Api - controlador',
        nombre,
        edad
    });
});

const usuariosPut  = ((req, res = response) => {

    const { id } = req.params;
    res.json({
        msg: 'put Api - controlador',
        id
    });
});

const usuariosPatch = ((req, res) => {
    res.json({
        msg: 'patch Api - controlador'
    });
});

const usuariosDelete = ((req, res = response) => {
    res.json({
        msg: 'delete Api - controlador'
    });
});


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}