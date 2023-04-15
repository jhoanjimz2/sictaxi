export interface RespTaxisChatarrizados {
    data:  TaxiChatarrizado[];
    pages: number;
}

export interface TaxiChatarrizado {
    nombreEmpresa:     string;
    placa:             string;
    modelo:            string;
    marca:             string;
    nombrePropietario: string;
    cedulaPropietario: string;
    fechaChatarrizado: string;
}
