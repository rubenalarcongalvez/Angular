interface Localizacion {
    estanteria: number;
    habitacion: string;
}

export interface Libro {
    titulo: string;
    autor: string;
    anioPublicacion: number;
    localizacion: Localizacion;
}