export interface RespTaxisSoatVencido {
    data:  TaxiSoatVencido[];
    pages: number;
}

export interface TaxiSoatVencido {
    id:                   number;
    nombreEmpresa:        string;
    placa:                string;
    modelo:               string;
    marca:                string;
    numeroSOAT:           string;
    fechaVencimientoSOAT: Date;
}
