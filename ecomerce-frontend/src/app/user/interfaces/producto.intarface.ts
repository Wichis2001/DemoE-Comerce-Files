

export interface Producto {
  _id:          string;
  nombre:       string;
  descripcion:  string;
  precio:       string;
  usuario:      UsuarioProducto;
  existencia:   number;
  aprobado:     boolean;
  categoria:    TipoCategoria;
  imagen?:      string;
  ok?:          boolean;
}

export interface UsuarioProducto {
  _id:         string;
  nombre:      string;
}

export interface TipoCategoria {
  _id:        string;
  nombre:     string;
}

export enum Categoria {
  Tecnología = "Tecnología",
  Hogar = "Hogar",
  Académico = "Académico",
  Literatura = "Literatura",
  Decoración = "Decoración",
  Otros = "Otros"
}
