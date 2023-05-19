export interface GetConductorIDVinculacion {
    id:                      number;
    idVehiculo:              number;
    idConductor:             number;
    jornada:                 string;
    consecutivo:             string;
    idEmpresa:               number;
    fechaUltimaRefrendacion: Date;
    estado:                  string;
    conductor:               AddConductor;
    vehiculo:                AddVehiculo;
    empresa:                 AddEmpresa;
}

export interface AddConductor {
    id:                      number;
    cedula:                  string;
    idUsuario:               number;
    nombres:                 string;
    apellidos:               string;
    direccion:               string;
    barrio:                  string;
    telefono:                string;
    categoriaPase:           string;
    licenciaConduccion:      string;
    fechaLicenciaConduccion: Date;
    tipoSangre:              string;
    rh:                      string;
    email:                   string;
    fotoURL:                 string;
    fechaNacimiento:         Date | string;
    sexo:                    string;
    comparendosVigentes:     string;
    polizaAccidentes:        string;
    estadoCivil:             string;
    parentescoJefeHogar:     string;
    numeroHijos:             string;
    personasCargo:           string;
    nivelEducativoAlcanzado: string;
    estudia:                 number;
    tipoDiscapacidad:        string;
    taxistaOcacional:        number;
    tiempoComoConductor:     string;
    otraLabor:               string;
    tiempoOtraLabor:         string;
    ingresosAproxConductor:  string;
    ingresosOtraLabor:       string;
    estratoSocioEconomico:   string;
    tipoVivienda:            string;
    luz:                     number;
    agua:                    number;
    gas:                     number;
    alcantarillado:          number;
    recoleccionBasura:       number;
    otraLaborUnidad:         string;
    conductorLaborUnidad:    number;
    idEps:                   number;
    idAfp:                   number;
    idArl:                   number;
    uuid:                    string;
    seguridad_social:        AddSeguridadSocial[];
}

export interface AddSeguridadSocial {
    id:                    number;
    codigo:                number;
    nombre:                string;
    direccion:             string;
    telefono:              string;
    estado:                string;
    tipo:                  string;
    fechaEliminacion:      string;
    fechaRegistro:         string;
    fechaModificacion:     string;
    idUsuarioRegistro:     string;
    idUsuarioModificacion: string;
    idUsuarioEliminacion:  string;
    idMigration:           string;
    pivot:                 AddPivot;
}

export interface AddPivot {
    idConductor:       number;
    idSeguridadSocial: number;
}

export interface AddEmpresa {
    id:          number;
    direccion:   string;
    email:       string;
    telefono:    string;
    nit:         string;
    razonSocial: string;
    logo:        string;
}

export interface AddVehiculo {
    id:                       number;
    placa:                    string;
    emailPropietario:         string;
    modelo:                   string;
    clase:                    string;
    capacidad:                string;
    tipoCombustible:          string;
    numeroMotor:              string;
    numeroChasis:             string;
    tarjetaOperacion:         string;
    fechaTarjetaOperacion:    Date;
    fechaTarjetaOperacionF:   Date;
    cedulaPropietario:        string;
    nombrePropietario:        string;
    telefonoPropietario:      string;
    direccionPropietario:     string;
    numeroRCC:                string;
    numeroRCE:                string;
    numeroSOAT:               string;
    fechaNumeroRCC:           Date;
    fechaNumeroRCE:           Date;
    fechaNumeroSOAT:          Date;
    numeroTecnoMecanica:      string;
    fechaNumeroTecnoMecanica: Date;
    idAseguradora:            number;
    idMarca:                  number;
    idAsociacion:             number;
    idMatricula:              number;
    marca:                    AddMarca;
    aseguradora:              AddAseguradora;
}

export interface AddAseguradora {
    id:            number;
    codigo:        string;
    nombre:        string;
    direccion:     string;
    telefono:      string;
    estado:        string;
    fechaRegistro: string;
}
export interface AddMarca {
    id:    number;
    marca: string;
}
export interface AddCrearConductor {
    idAfp:                   string;
    idArl:                   string;
    idEps:                   string;
    apellidos:               string;
    barrio:                  string;
    categoriaPase:           string;
    cedula:                  string;
    direccion:               string;
    email:                   string;
    estadoCivil:             string;
    fechaLicenciaConduccion: string;
    fechaNacimiento:         string;
    foto:                    File;
    jornada:                 string;
    nombres:                 string;
    rh:                      string;
    sexo:                    string;
    telefono:                string;
    tipoSangre:              string;
    agua:                    string;
    alcantarillado:          string;
    conductorLaborUnidad:    string;
    estratoSocioEconomico:   string;
    estudia:                 string;
    gas:                     string;
    ingresosAproxConductor:  string;
    ingresosOtraLabor:       string;
    luz:                     string;
    nivelEducativoAlcanzado: string;
    numeroHijos:             string;
    otraLabor:               string;
    otraLaborUnidad:         string;
    parentescoJefeHogar:     string;
    personasCargo:           string;
    recoleccionBasura:       string;
    taxistaOcacional:        string;
    tiempoComoConductor:     string;
    tiempoOtraLabor:         string;
    tipoDiscapacidad:        string;
    tipoVivienda:            string;
    cedulaPropietario:        string;
    direccionPropietario:     string;
    fechaNumeroRCC:           string;
    fechaNumeroRCE:           string;
    fechaNumeroSOAT:          string;
    fechaNumeroTecnoMecanica: string;
    fechaTarjetaOperacion:    string;
    fechaTarjetaOperacionF:   string;
    idAseguradora:            string;
    idAsociacion:             string;
    idMarca:                  string;
    idMatricula:              string;
    modelo:                   string;
    nombrePropietario:        string;
    numeroChasis:             string;
    numeroMotor:              string;
    numeroRCC:                string;
    numeroRCE:                string;
    numeroSOAT:               string;
    numeroTecnoMecanica:      string;
    placa:                    string;
    tarjetaOperacion:         string;
    telefonoPropietario:      string;
}
export interface Refrendaciones {
    usuario:       string;
    fechaRegistro: string;
}
