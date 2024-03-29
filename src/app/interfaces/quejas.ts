// Generated by https://quicktype.io
export interface ReqConductoresConQuejas {
    fechaInicial: string;
    fechaFinal:   string;
    comentarios:  string[] | undefined;
    filtro:       string | undefined;
}

export interface RespConductoresConQuejas {
    data:  ConductoresConQuejas[];
    pages: number;
}

export interface ConductoresConQuejas {
    name:              string;
    surname:           string;
    idVinculacion:     number;
    idConductor:       number;
    img:               string;
    placa:             string;
    marca:             string;
    modelo:            string;
    numeroMotor:       string;
    numeroChasis:      string;
    estado:            string;
    cantidad:          number;
    cantidadTramitada: number;
    cedula:            string;
}
