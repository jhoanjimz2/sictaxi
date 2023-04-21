export interface ReqEstadisticaConductores {
    fechaInicial: string;
    fechaFinal  : string;
    comentarios?: string[];
}
export interface ConductorConCalificacion {
    name:          string;
    surname:       string;
    idConductor:   number;
    idVinculacion: number;
    img:           string;
    placa:         string;
    cantidad:      number;
}