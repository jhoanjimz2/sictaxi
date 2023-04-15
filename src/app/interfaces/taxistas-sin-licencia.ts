export interface RespTaxistasSinLicencia {
    data:  TaxistaSinLicencia[];
    pages: number;
}

export interface TaxistaSinLicencia {
    idVinculacion:                      number;
    idConductor:                        number;
    nombres:                            string;
    apellidos:                          string;
    cedula:                             string;
    licenciaConduccion:                 string;
    licenciaConduccionFechaVencimiento: Date;
    categoriaPase:                      string;
    nombreEmpresa:                      string;
    placa:                              string;
    fechaUltimaRefrendaccion:           Date;
    logo:                               string;
}
