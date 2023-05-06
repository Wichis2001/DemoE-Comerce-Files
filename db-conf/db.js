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

id = db.usuarios.findOne({ nombre: 'common1'});
db.productos.insertMany([
    {   
        'nombre'        : 'Crema para el cabello',
        'descripcion'   : 'Eficiente crema para tu cabello',
        'img'           : '',
        'precio'        : 33.00,
        'usuario'       : id,
        'existencia'    : 15,
        'categoria'     : db.categorias.findOne({ nombre: 'Hogar' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Shampoo para hombre',
        'descripcion'   : 'Shampoo enfocado a todo tipo de cabellos',
        'img'           : '',
        'precio'        : 45.00,
        'usuario'       : id,
        'existencia'    : 10,
        'categoria'     : db.categorias.findOne({ nombre: 'Hogar' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Shampoo para mujer',
        'descripcion'   : 'Shampoo enfocado para todo tipo de cabellos',
        'img'           : '',
        'precio'        : 50.00,
        'usuario'       : id,
        'existencia'    : 20,
        'categoria'     : db.categorias.findOne({ nombre: 'Hogar' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Desodorante para mujer',
        'descripcion'   : 'Desodorante destinado para mujeres',
        'img'           : '',
        'precio'        : 17.00,
        'usuario'       : id,
        'existencia'    : 8,
        'categoria'     : db.categorias.findOne({ nombre: 'Hogar' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Desodorante para hombre',
        'descripcion'   : 'Desodorante destinado para hombres',
        'img'           : '',
        'precio'        : 15.00,
        'usuario'       : id,
        'existencia'    : 4,
        'categoria'     : db.categorias.findOne({ nombre: 'Hogar' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Iphone X',
        'descripcion'   : 'Teléfono Iphone X en excelente estado',
        'img'           : '',
        'precio'        : 4500,
        'usuario'       : id,
        'existencia'    : 2,
        'categoria'     : db.categorias.findOne({ nombre: 'Tecnología'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Iphone 11',
        'descripcion'   : 'Teléfono Iphone 11 en excelente estado',
        'img'           : '',
        'precio'        : 5000,
        'usuario'       : id,
        'existencia'    : 7,
        'categoria'     : db.categorias.findOne({ nombre: 'Tecnología'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Iphone 12',
        'descripcion'   : 'Teléfono Iphone 12 en excelente estado',
        'img'           : '',
        'precio'        : 6500,
        'usuario'       : id,
        'existencia'    : 4,
        'categoria'     : db.categorias.findOne({ nombre: 'Tecnología'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Iphone 13',
        'descripcion'   : 'Teléfono Iphone 13 en excelente estado',
        'img'           : '',
        'precio'        : 7500,
        'usuario'       : id,
        'existencia'    : 10,
        'categoria'     : db.categorias.findOne({ nombre: 'Tecnología'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Iphone 14',
        'descripcion'   : 'Teléfono Iphone 14 en excelente estado',
        'img'           : '',
        'precio'        : 9800,
        'usuario'       : id,
        'existencia'    : 10,
        'categoria'     : db.categorias.findOne({ nombre: 'Tecnología'}),
        'aprobado'      : true
    }
])

id = db.usuarios.findOne({ nombre: 'common2'});
db.productos.insertMany([
    {   
        'nombre'        : 'Perros Beagle',
        'descripcion'   : 'Hermosos perros de raza Beagle, listos para hacerte compañia',
        'img'           : '',
        'precio'        : 750,
        'usuario'       : id,
        'existencia'    : 5,
        'categoria'     : db.categorias.findOne({ nombre: 'Otros' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Perros Chihuahua',
        'descripcion'   : 'Hermosos perros de raza Chihuahua, listos para hacerte compañia',
        'img'           : '',
        'precio'        : 500,
        'usuario'       : id,
        'existencia'    : 2,
        'categoria'     : db.categorias.findOne({ nombre: 'Otros' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Perros Chow chow',
        'descripcion'   : 'Hermosos perros de raza Chow chow, listos para hacerte compañia',
        'img'           : '',
        'precio'        : 900,
        'usuario'       : id,
        'existencia'    : 7,
        'categoria'     : db.categorias.findOne({ nombre: 'Otros' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Perros Dálmata',
        'descripcion'   : 'Hermosos perros de raza Dálmata, listos para hacerte compañia',
        'img'           : '',
        'precio'        : 1200,
        'usuario'       : id,
        'existencia'    : 15,
        'categoria'     : db.categorias.findOne({ nombre: 'Otros' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Perros Galgo',
        'descripcion'   : 'Hermosos perros de raza Galgo, listos para hacerte compañia',
        'img'           : '',
        'precio'        : 785,
        'usuario'       : id,
        'existencia'    : 9,
        'categoria'     : db.categorias.findOne({ nombre: 'Otros' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Perros Golden Retriever',
        'descripcion'   : 'Hermosos perros de raza Golden Retriever, listos para hacerte compañia',
        'img'           : '',
        'precio'        : 985,
        'usuario'       : id,
        'existencia'    : 30,
        'categoria'     : db.categorias.findOne({ nombre: 'Otros'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Perros Komondor',
        'descripcion'   : 'Hermosos perros de raza Komondor, listos para hacerte compañia',
        'img'           : '',
        'precio'        : 2000,
        'usuario'       : id,
        'existencia'    : 2,
        'categoria'     : db.categorias.findOne({ nombre: 'Otros' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Perros Labrador',
        'descripcion'   : 'Hermosos perros de raza Labrador, listos para hacerte compañia',
        'img'           : '',
        'precio'        : 685,
        'usuario'       : id,
        'existencia'    : 1,
        'categoria'     : db.categorias.findOne({ nombre: 'Otros'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Perros Husky',
        'descripcion'   : 'Hermosos perros de raza Husky, listos para hacerte compañia',
        'img'           : '',
        'precio'        : 965,
        'usuario'       : id,
        'existencia'    : 8,
        'categoria'     : db.categorias.findOne({ nombre: 'Otros' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Perros Pastor Alemán',
        'descripcion'   : 'Hermosos perros de raza Pastor Alemán, listos para hacerte compañia',
        'img'           : '',
        'precio'        : 1500,
        'usuario'       : id,
        'existencia'    : 4,
        'categoria'     : db.categorias.findOne({ nombre: 'Otros' }),
        'aprobado'      : true
    }
])

id = db.usuarios.findOne({ nombre: 'common3'});
db.productos.insertMany([
    {   
        'nombre'        : 'Escritorio de Madera',
        'descripcion'   : 'Escritorios de Madera listos para darle un look genial a tu habitación',
        'img'           : '',
        'precio'        : 800,
        'usuario'       : id,
        'existencia'    : 25,
        'categoria'     : db.categorias.findOne({ nombre: 'Decoración'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Libreras de Madera',
        'descripcion'   : 'Libreras de Madera listas para darle un look genial a tu habitación',
        'img'           : '',
        'precio'        : 2000,
        'usuario'       : id,
        'existencia'    : 4,
        'categoria'     : db.categorias.findOne({ nombre: 'Decoración' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Organizadores de Escritorio',
        'descripcion'   : 'Organizadores de Escritorio listos para darle un look genial a tu habitación',
        'img'           : '',
        'precio'        : 125,
        'usuario'       : id,
        'existencia'    : 80,
        'categoria'     : db.categorias.findOne({ nombre: 'Decoración'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Gavetas',
        'descripcion'   : 'Gavetas listas para darle un look genial a tu habitación',
        'img'           : '',
        'precio'        : 180,
        'usuario'       : id,
        'existencia'    : 85,
        'categoria'     : db.categorias.findOne({ nombre: 'Decoración' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Pizarras',
        'descripcion'   : 'Pizarras listas para darle un look genial a tu habitación',
        'img'           : '',
        'precio'        : 100,
        'usuario'       : id,
        'existencia'    : 20,
        'categoria'     : db.categorias.findOne({ nombre: 'Decoración' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Sillas de Oficina',
        'descripcion'   : 'Sillas de Oficina listas para darle un look genial a tu habitación',
        'img'           : '',
        'precio'        : 660,
        'usuario'       : id,
        'existencia'    : 6,
        'categoria'     : db.categorias.findOne({ nombre: 'Decoración'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Sillas Gamer',
        'descripcion'   : 'Sillas Gamer listas para darle un look genial a tu habitación',
        'img'           : '',
        'precio'        : 800,
        'usuario'       : id,
        'existencia'    : 30,
        'categoria'     : db.categorias.findOne({ nombre: 'Decoración' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Contenedores',
        'descripcion'   : 'Contenedores listos para darle un look genial a tu habitación',
        'img'           : '',
        'precio'        : 90,
        'usuario'       : id,
        'existencia'    : 5,
        'categoria'     : db.categorias.findOne({ nombre: 'Decoración' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Hampers',
        'descripcion'   : 'Hampers listos para darle un look genial a tu habitación',
        'img'           : '',
        'precio'        : 35,
        'usuario'       : id,
        'existencia'    : 15,
        'categoria'     : db.categorias.findOne({ nombre: 'Decoración'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Recueadros de Mario',
        'descripcion'   : 'Recuadros de Mario listos para darle un look genial a tu habitación',
        'img'           : '',
        'precio'        : 250,
        'usuario'       : id,
        'existencia'    : 5,
        'categoria'     : db.categorias.findOne({ nombre: }),
        'aprobado'      : true
    }
])

id = db.usuarios.findOne({ nombre: 'common4'});
db.productos.insertMany([
    {   
        'nombre'        : 'Pack Tokyo Revengers',
        'descripcion'   : 'Pack de libros de Tokyo Revengers listos para una lectura profunda',
        'img'           : '',
        'precio'        : 1015,
        'usuario'       : id,
        'existencia'    : 5,
        'categoria'     : db.categorias.findOne({ nombre: 'Literatura' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Saga Maze Runenr',
        'descripcion'   : 'Pack de Saga de Maze Runner listos para una lectura profunda',
        'img'           : '',
        'precio'        : 405,
        'usuario'       : id,
        'existencia'    : 10,
        'categoria'     : db.categorias.findOne({ nombre: 'Literatura'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Divina Comedia',
        'descripcion'   : 'Pack de la Divina Comedia listos para una lectura profunda',
        'img'           : '',
        'precio'        : 505,
        'usuario'       : id,
        'existencia'    : 8,
        'categoria'     : db.categorias.findOne({ nombre: 'Literatura'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Pack George Orwell',
        'descripcion'   : 'Pack de George Orewell para una lectura profunda',
        'img'           : '',
        'precio'        : 215,
        'usuario'       : id,
        'existencia'    : 15,
        'categoria'     : db.categorias.findOne({ nombre: 'Literatura' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Pack Biología Sofía',
        'descripcion'   : 'Pack de Biología Sofía para una lectura profunda',
        'img'           : '',
        'precio'        : 239,
        'usuario'       : id,
        'existencia'    : 25,
        'categoria'     : db.categorias.findOne({ nombre: 'Literatura'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Trilogía Culpables',
        'descripcion'   : 'Pack de Trilogía de Culpables para una lectura profunda',
        'img'           : '',
        'precio'        : 325,
        'usuario'       : id,
        'existencia'    : 75,
        'categoria'     : db.categorias.findOne({ nombre: 'Literatura'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Trilogía de la Nube blanca',
        'descripcion'   : 'Pack de Trilogía de la Nube blanca para una lectura profunda',
        'img'           : '',
        'precio'        : 395,
        'usuario'       : id,
        'existencia'    : 25,
        'categoria'     : db.categorias.findOne({ nombre: 'Literatura' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Trilogía de Africanus',
        'descripcion'   : 'Pack de Trilogía de Africanus para una lectura profunda',
        'img'           : '',
        'precio'        : 359,
        'usuario'       : id,
        'existencia'    : 25,
        'categoria'     : db.categorias.findOne({ nombre: 'Literatura' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Tetralogía Hush Hush',
        'descripcion'   : 'Pack de Tetralogía Hush Hush para una lectura profunda',
        'img'           : '',
        'precio'        : 479,
        'usuario'       : id,
        'existencia'    : 20,
        'categoria'     : db.categorias.findOne({ nombre: 'Literatura'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Estuche la Selección',
        'descripcion'   : 'Estuche de la Selección para una lectura profunda',
        'img'           : '',
        'precio'        : 359,
        'usuario'       : id,
        'existencia'    : 20,
        'categoria'     : db.categorias.findOne({ nombre: 'Literatura' }),
        'aprobado'      : true
    }
])

id = db.usuarios.findOne({ nombre: 'common5'});
db.productos.insertMany([
    {   
        'nombre'        : 'Abaco de Plastico',
        'descripcion'   : 'Abaco de plastico para que puedas agregarlo a tu lista de útiles escolares',
        'img'           : '',
        'precio'        : 23.75,
        'usuario'       : id,
        'existencia'    : 10,
        'categoria'     : db.categorias.findOne({ nombre: 'Académico'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Acuarela',
        'descripcion'   : 'Acuarela para que puedas agregarlo a tu lista de útiles escolares',
        'img'           : '',
        'precio'        : 8.10,
        'usuario'       : id,
        'existencia'    : 40,
        'categoria'     : db.categorias.findOne({ nombre: 'Académico'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Almohadilla para pizarra',
        'descripcion'   : 'Almohadilla para pizarra para que puedas agregarlo a tu lista de útiles escolares',
        'img'           : '',
        'precio'        : 7,
        'usuario'       : id,
        'existencia'    : 20,
        'categoria'     : db.categorias.findOne({ nombre: 'Académico'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Block Papel Bond',
        'descripcion'   : 'Block de Papel Bond para que puedas agregarlo a tu lista de útiles escolares',
        'img'           : '',
        'precio'        : 15.35,
        'usuario'       : id,
        'existencia'    : 20,
        'categoria'     : db.categorias.findOne({ nombre: 'Académico' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Duo Pack Borrador',
        'descripcion'   : 'Duo Pack Borrador para que puedas agregarlo a tu lista de útiles escolares',
        'img'           : '',
        'precio'        : 4.10,
        'usuario'       : id,
        'existencia'    : 8,
        'categoria'     : db.categorias.findOne({ nombre: 'Académico'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Calculadora Cientifica',
        'descripcion'   : 'Calculadora Cientifica para que puedas agregarlo a tu lista de útiles escolares',
        'img'           : '',
        'precio'        : 46.25,
        'usuario'       : id,
        'existencia'    : 8,
        'categoria'     : db.categorias.findOne({ nombre: 'Académico'}),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Cuaderno de Caligrafía',
        'descripcion'   : 'Cuaderno de Caligrafía para que puedas agregarlo a tu lista de útiles escolares',
        'img'           : '',
        'precio'        : 39.60,
        'usuario'       : id,
        'existencia'    : 2,
        'categoria'     : db.categorias.findOne({ nombre: 'Académico' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Carton Presentación',
        'descripcion'   : 'Carton Presentación para que puedas agregarlo a tu lista de útiles escolares',
        'img'           : '',
        'precio'        : 30.60,
        'usuario'       : id,
        'existencia'    : 10,
        'categoria'     : db.categorias.findOne({ nombre: 'Académico' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Cartuchera',
        'descripcion'   : 'Cartuchera para que puedas agregarlo a tu lista de útiles escolares',
        'img'           : '',
        'precio'        : 17.05,
        'usuario'       : id,
        'existencia'    : 10,
        'categoria'     : db.categorias.findOne({ nombre: 'Académico' }),
        'aprobado'      : true
    },
    {   
        'nombre'        : 'Compas',
        'descripcion'   : 'Compas para que puedas agregarlo a tu lista de útiles escolares',
        'img'           : '',
        'precio'        : 5.15,
        'usuario'       : id,
        'existencia'    : 2,
        'categoria'     : db.categorias.findOne({ nombre: 'Académico'}),
        'aprobado'      : true
    }
])

db.createCollection('ventas')

