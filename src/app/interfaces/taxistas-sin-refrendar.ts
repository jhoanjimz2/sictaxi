export interface RespTaxistasSinRefrendar {
    data:  TaxistaSinRefrendar[];
    pages: number;
}

export interface TaxistaSinRefrendar {
    idVinculacion:            number;
    idConductor:              number;
    nombres:                  string;
    apellidos:                string;
    cedula:                   string;
    licenciaConduccion:       string;
    fechaRegistro:            Date;
    numeroRefrendaciones:     number;
    nombreEmpresa:            string;
    categoriaPase:            string;
    fechaUltimaRefrendaccion: Date;
    placa:                    string;
    logo:                     string;
}
