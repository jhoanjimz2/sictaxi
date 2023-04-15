export interface RespTaxistasRegistrados {
    data:  TaxistaRegistrado[];
    pages: number;
}

export interface TaxistaRegistrado {
    idVinculacion:            number;
    idConductor:              number;
    nombres:                  string;
    apellidos:                string;
    cedula:                   string;
    licenciaConduccion:       string;
    categoriaPase:            string;
    nombreEmpresa:            string;
    fechaUltimaRefrendaccion: Date;
    placa:                    string;
    logo:                     string;
}