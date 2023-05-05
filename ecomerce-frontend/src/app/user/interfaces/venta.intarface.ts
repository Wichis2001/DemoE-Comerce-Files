import { Producto } from "./producto.intarface"

export interface Venta {
  total:              number;
  fecha:              Date;
  usuario_vendedor:   UsuarioVenta;
  usuario_comprador:  UsuarioVenta;
  estado?:            Estado;
  fecha_entrega:      Date;
}

export interface DetalleVenta {
  venta?:       Venta;
  producto:     Producto;
  cantidad:     number;
  precio_venta: number;
}

export interface UsuarioVenta {
  _id:         string;
  nombre:      string;
}

export enum Estado {
  enCurso = 'EN_CURSO',
  entregado = 'ENTREGADO'
}
export interface FileUploadResponse {
  nombreArchivo?:   string;
  msg           :   string;
  ok            :   boolean
}
