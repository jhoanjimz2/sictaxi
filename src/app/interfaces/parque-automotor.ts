export interface GetParqueAutomotor {
    data:  Vehiculo[];
    pages: number;
}
export interface Vehiculo {
    id:                   number;
    nombreEmpresa:        string;
    placa:                string;
    modelo:               string;
    marca:                string;
    nombrePropietario:    string;
    cedulaPropietario:    string;
    numeroMotor:          string;
    numeroChasis:         string;
    telefonoPropietario:  string;
    direccionPropietario: string;
}