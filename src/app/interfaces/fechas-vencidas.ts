export interface RespFechasVencidas {
    data:  FechasVencidas[];
    pages: number;
}

export interface FechasVencidas {
    imgConductor:       string;
    id:                 number;
    nombre:             string;
    empresa:            string;
    cedula:             string;
    placa:              string;
    licenciaConduccion: string;
    tarjetaOperacion:   string;
    rcc:                string;
    rce:                string;
    soat:               string;
    tecnicoMecanica:    string;
}