export interface Quejas {
    name:     string;
    id:       string;
    cantidad: number;
}
export interface Comentarios {
    name: string;
    id:   string;
}
export interface TaxistaEasy {
    idVinculacion : string;
    name          : string;
    surname       : string;
    img           : string;
    placa         : string;
    cantidad      : number;
}
export interface QuejaSiONoTramitada {
    comentarios : string[];
    email       : string;
    nombre      : string;
    telefono    : string;
    fecha       : string;
}
export interface GraficaCalificaciones {
    labels:   string[];
    datasets: Comentario[];
}
export interface Comentario {
    data:  number[];
    label: string;
}
export interface GraficaComentarios {
    labels:   string[];
    datasets: Comentario[];
}