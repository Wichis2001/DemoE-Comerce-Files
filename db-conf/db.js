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

db.createCollection('tarjetas')

db.createCollection('productos')

db.createCollection('ventas')

db.createCollection('detalle-ventas')