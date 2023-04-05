export interface RespTaxisRegistrados {
    data:  TaxiRegistrado[];
    pages: number;
}

export interface TaxiRegistrado {
    nombreEmpresa:     string;
    placa:             string;
    modelo:            string;
    marca:             string;
    nombrePropietario: string;
    cedulaPropietario: string;
}
