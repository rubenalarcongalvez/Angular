/*
    ===== Código de TypeScript =====
*/

// const x:string = 'sjkdlsj';
// const y = 'sjkdlsj';

// let coche:string | number | boolean = 'renault';
// let n:number = 343;

// function suma(a:number | string, b:number) {
//     return "" + a + b;
// }

// var z:string[] = ["Pep", "Armenia"];

// console.log(coche + " " + suma(n, 7));

// let array: string[] = ['23', 'valor', 'cadena'];

// console.log(array.join('\n'));

/*=============================================
=            Objetos            =
=============================================*/

// interface unViaje {
//     origen: string;
//     destino: string;
//     numDias: number;
//     paradas?: string[];

//     mostrarInfo(): void;
// }

// const unViaje: unViaje = {
//     origen: 'Málaga',
//     destino: 'Córdoba',
//     numDias: 3,

//     mostrarInfo() {
//         console.log(`Información del viaje:
//                     Origen: ${this.origen}
//                     Destino: ${this.destino}
//                     Número de días: ${this.numDias}`);
//     }
// }

// unViaje.mostrarInfo();

// interface IntObj {
//     a: string, /* se puede poner con coma la finalización del atributo en una interfaz */
//     b: string; /* o con punto y coma */
//     c: number; /* pero debemos elegir solo una nomenclatura */
// }

// const nombreObj: IntObj = {
//     a: "primer valor",
//     b: "segundo valor",
//     c: 45,
// };

// function mostrarObjeto(objeto: IntObj) {
//     console.log(nombreObj);
// }

// mostrarObjeto(nombreObj);

/*=====  Final de Objetos  ======*/

/*=============================================
=            Funciones            =
=============================================*/

// function suma(a:number, b?:string, c:number = 3) {
//     console.log(b);
//     return a + c;
// }

// let res = suma(2);
// console.log(res);

/*=====  Final de Funciones  ======*/

/**
 * Ejercicio de interfaces
 *
 */

// interface Viaje {
//     nombre: string;
//     origen: string;
//     destino: string;
//     ruta: Ruta;
//     coste?: number;
//     mostrarDestino(): string;
//     mostrarTransporte(): string;
// }

// interface Ruta {
//     transporte: string;
//     paradas: string[];
// }

// const elviaje = {
//     nombre: "Viaje fin de curso",
//     origen: "Málaga",
//     destino: "Marraakesh",
//     ruta: {
//         transporte: "Coche",
//         paradas: ["Algeciras", "Tánger", "Casablanca"],
//     },
//     mostrarDestino() {
//         return this.destino;
//     },
//     mostrarTransporte() {
//         return this.ruta.transporte;
//     },
// };

// const dest = elviaje.mostrarDestino();
// const trans = elviaje.mostrarTransporte();
// console.log(dest, trans); //muestra el destino y el transporte

/*=============================================
=            Desestructuración de objetos            =
=============================================*/

// interface Localizacion {
//     estanteria: number;
//     habitacion: string;
// }

// interface Libro {
//     titulo: string;
//     autor: string;
//     anioPublicacion: number;
//     localizacion: Localizacion;
// }

// const libro1: Libro = {
//     titulo: "1984",
//     autor: "George Orwell",
//     anioPublicacion: 1930,
//     localizacion: {
//         estanteria: 5,
//         habitacion: "biblioteca01",
//     },
// };

// const { titulo, autor: miautor, localizacion } = /* Podemos poner un alias a un atributo si queremos */
//     libro1; /* Si añadimos esto, podemos acceder directamente como si fueran variables, y no poniendo objeto.atributo */
// const { estanteria } = localizacion;

// console.log("El título es: ", titulo); /* Se puede poner con comas la concatenación */
// console.log("El autor es: " + miautor); /* o con + */
// // console.log("Está en la estantería: " + libro.localizacion.estanteria); /* Por ejemplo lo podemos poner así */
// console.log("Está en la estantería: " + estanteria); /* O así */

/*=====  Final de Desestructuración de objetos  ======*/

/*=============================================
=            Desestructuración de arrays            =
=============================================*/

// const array: string[] = ["enero", "febrero", "marzo"];

// const [m1, , m3] = array; /* Podemos dejar un hueco libre si no necesitamos */

// console.log("valor 1: ", m1);
// console.log("valor 2: ", array[1]);
// console.log("valor 3: ", m3);

/*=====  Final de Desestructuración de arrays  ======*/

/*=============================================
=            Importar y exportar            =
=============================================*/

// //Si ponemos Libro y hemos creado el elemento en otro sitio, nos sugerirá importarlo
// import { Libro } from './interfaces/libro.interface'; /* Para importar una interfaz o algo que esté en otro archivo o carpeta */
// /* (Previamente tenemos que poner export antes de lo que queramos exportar del otro archivo) */

// const libro1: Libro = {
//     titulo: "1984",
//     autor: "George Orwell",
//     anioPublicacion: 1930,
//     localizacion: {
//         estanteria: 5,
//         habitacion: "biblioteca01",
//     },
// };

// const { titulo, autor: miautor, localizacion } =
//     libro1;
// const { estanteria } = localizacion;

// console.log("El título es: ", titulo);
// console.log("El autor es: " + miautor);

// console.log("Está en la estantería: " + estanteria);

/*=====  Final de Importar y exportar  ======*/

/*=============================================
=            Clases            =
=============================================*/

// class MiViaje {
//     /* Si lo queremos poner public, pondremos en una clase export */
//     /**
//      * Podemos crear los atributos primero y luego el constructor y luego igualar
//      *
//      */
//     // /* public */ origen: string; /* Por defecto los atributos son public (podemos no ponerlo o ponerlo) */
//     // private destino: string; /* También podemos poner private o protected */
//     // /* private */ static numDias: number = 3; /* O static (le podemos poner también private si queremos) */
//     // /* También podemos poner valores por defecto si igualamos */

//     // /* Podemos crear un constructor que no sea el de por defecto (si no se crea, se crea un constructor vacío) */
//     // constructor (origen: string) {
//     //     this.origen = origen;
//     // }

//     /**
//      * Podemos declarar el constructor y los atributos directamente (lo más rápido y si queremos hacer más cosas, lo hacemos entre los corchetes)
//      *
//      */
//     /* Lo único que no se puede poner en el constructor son los static */
//     /* private */ static numDias: number = 3; /* Aquí sí que se pone public por defecto, si lo queremos privado tenemos que ponerlo */

//     /* EN EL CONSTRUCTOR HAY SIEMPRE QUE PONER public o private o protected. Si no lo podemos, es un atributo deshabilitado (no existe) */
//     constructor(
//         public origen: string /* Si queremos hacerlo público, lo tenemos que poner */,
//         protected destino: string /* Si queremos hacerlo private o protected, también lo podemos hacer */
//     ) {}

//     mostrarDestino() {
//         /* Es como un getter. También podemos hacer setters si queremos y está privado */
//         return this.destino;
//     }
// }

// const miviaje = new MiViaje("Madrid", "Barcelona");

// miviaje.origen = "Sevilla"; /* Podemos cambiarlo */

// console.log(miviaje);
// console.log(miviaje.mostrarDestino());

// console.log(
//     MiViaje.numDias
// ); /* podemos acceder al atributo estático sin crear el objeto (siempre que esté público) */

// /* Podemos heredar de otra clase */
// class ViajeNegocios extends MiViaje {
//     constructor(
//         public empresa: string,
//         public origen: string /* Si queremos hacerlo público, lo tenemos que poner */,
//         protected destino: string /* Si queremos hacerlo private o protected, también lo podemos hacer */
//     ) {
//         super(origen, destino);
//     }

//     /* podemos crear métodos para acceder a destino si queremos (getter), pero no hace falta, como tampoco hace falta importar los atributos estáticos */

//     /* Lo que sí podemos hacer es crear otro método para enunciar todo de forma bonita por ej */
//     mostrarViaje() {
//         console.log('Viaje de empresa');
//         console.log('Empresa: ' + this.empresa);
//         console.log('Origen: ' + this.origen);
//         console.log('Destino: ' + this.destino);
//         console.log('Número de días: ' + ViajeNegocios.numDias);
//     }
// }

// const viaje = new ViajeNegocios('Rolex', 'España', 'Finlandia');
// console.log(viaje.mostrarDestino());
// console.log(ViajeNegocios.numDias);

// viaje.mostrarViaje();

/*=====  Final de Clases  ======*/

/*=============================================
=            Genéricos            =
=============================================*/

function tipoGenerico<T, G>(arg: T, arg2: G) {
    return arg;
}

let tipoNumero = tipoGenerico(123, 'test');
let tipoString = tipoGenerico('Hola', 'test2');
let tipoExplicito = tipoGenerico<string, string>('gila', 'hola');

console.log(typeof tipoString + tipoNumero);

/*----------  Con interfaces  ----------*/

interface NuevoPasajero {
    nombre: string;
    children?: string[];
}

const pasajero10: NuevoPasajero = {
    nombre: 'Federico',
};

const pasajero11: NuevoPasajero = {
    nombre: 'María',
    children: ['Jose', 'Lucía'],
};

function muestraHijos(pasajero: NuevoPasajero): void {
    const numHijos =
        pasajero.children?.length || 0; /* Si existe, dice el número. Si no, dice lo que le asignamos por defecto como salida */
    /* Si no ponemos la ?, si no existe, nos dará nulo */
    
    console.log(numHijos);
}

muestraHijos(pasajero11); /* Sí tiene, da salida */
muestraHijos(pasajero10); /* No tiene, dará fallo, a no ser que pongamos un valor por defecto de salida a la función */

/*=====  Final de Genéricos  ======*/
