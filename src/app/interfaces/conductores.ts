// Generated by https://quicktype.io

export interface RespBuscarConductores {
    data:  ConductorSearch[];
    pages: number;
}

export interface ConductorSearch {
    idVinculacion:           string;
    idConductor:             string;
    nombres:                 string;
    cedula:                  string;
    direccion:               string;
    telefono:                string;
    licenciaConduccion:      string;
    licenciaConduccionFecha: string;
    categoriaPase:           string;
    tipoSangre:              string;
    fechaNacimiento:         string;
    tarjetaOperacion:        string;
    fechaTarjeta:            string;
    numeroRCC:               string;
    numeroRCE:               string;
    numeroSOAT:              string;
    numeroTecnomecanica:     string;
    nombrePropietario:       string;
    cedulaPropietario:       string;
    direccionPropietario:    string;
    telefonoPropietario:     string;
    eps:                     string;
    arl:                     string;
    afp:                     string;
    placa:                   string;
    marca:                   string;
    modelo:                  string;
    numeroMotor:             string;
    numeroChasis:            string;
    img:                     string;
    
    fechaTarjetaOperacionF:   Date;
    fechaTarjetaOperacion:    Date;
    fechaNumeroRCC:           Date;
    fechaNumeroRCE:           Date;
    fechaNumeroSOAT:          Date;
    fechaNumeroTecnoMecanica: Date;
}
