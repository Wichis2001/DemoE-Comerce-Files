npm install bcryptjs

use eCommerce

db.createCollection('roles')

db.roles.insertMany([
    {
        'rol': 'COMMON_ROLE'
    },
    {
        'rol': 'PACKAGE_ROLE'
    },
    {
        'rol': 'ADMIN_ROLE'
    }
])

db.createCollection('usuarios')

const bcrypt = require('bcryptjs');
db.usuarios.insertMany([
    
    {
        'nombre': 'common1',
        'password': bcrypt.hashSync('123456', bcrypt.genSaltSync()),
        'rol': 'COMMON_ROLE',
        'estado': true
    },
    {
        'nombre': 'common2',
        'password': bcrypt.hashSync('123456', bcrypt.genSaltSync()),
        'rol': 'COMMON_ROLE',
        'estado': true
    },
    {
        'nombre': 'common3',
        'password': bcrypt.hashSync('123456', bcrypt.genSaltSync()),
        'rol': 'COMMON_ROLE',
        'estado': true
    },
    {
        'nombre': 'common4',
        'password': bcrypt.hashSync('123456', bcrypt.genSaltSync()),
        'rol': 'COMMON_ROLE',
        'estado': true
    },
    {
        'nombre': 'common5',
        'password': bcrypt.hashSync('123456', bcrypt.genSaltSync()),
        'rol': 'COMMON_ROLE',
        'estado': true
    },
    {
        'nombre': 'package1',
        'password': bcrypt.hashSync('123456', bcrypt.genSaltSync()),
        'rol': 'PACKAGE_ROLE',
        'estado': true
    },
    {
        'nombre': 'package2',
        'password': bcrypt.hashSync('123456', bcrypt.genSaltSync()),
        'rol': 'PACKAGE_ROLE',
        'estado': true
    },
    {
        'nombre': 'admin1',
        'password': bcrypt.hashSync('123456', bcrypt.genSaltSync()),
        'rol': 'ADMIN_ROLE',
        'estado': true
    }
])

db.createCollection('categorias')

db.categorias.insertMany([
    {
        'nombre': 'Tecnología',
        'estado': true
    },
    {
        'nombre': 'Hogar',
        'estado': true
    },
    {
        'nombre': 'Académico',
        'estado': true
    },
    {
        'nombre': 'Literatura',
        'estado': true
    },
    {
        'nombre': 'Decoración',
        'estado': true
    },
    {
        'nombre': 'Otros',
        'estado': true
    }
])

db.createCollection('tarjetas')

db.createCollection('productos')

db.createCollection('ventas')

db.createCollection('detalle-ventas')