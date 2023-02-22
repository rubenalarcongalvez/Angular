// export interface Tienda {
//     clientes: Cliente[];
//     productos: Producto[];
// }

export interface Cliente {
    nombre: string;
    edad: number;
    genero: string;
    carrito: Carrito[];
}

interface Carrito { //no hace falta importar
    producto: string;
    cantidad: number;
}

export interface Producto {
    nombre: string;
    precio: number;
    cantidad: number;
}