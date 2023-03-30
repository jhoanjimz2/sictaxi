export class Cards {
    empresasAutorizadas:               number;
    taxisRegistrados:                  number;
    asociaciones:                      number;
    taxistasRegistrados:               number;
    taxisConLicenciaVencida:           number;
    taxistasSinRefrendar:              number;
    taxisConSoatVencido:               number;
    alertasDeVencimiento:              number;
    taxisConTarjetaDeOperacionVigente: number;
    vehiculoChatarrizados:             number;
    constructor() {
        this.empresasAutorizadas               = 0;
        this.taxisRegistrados                  = 0;
        this.asociaciones                      = 0;
        this.taxistasRegistrados               = 0;
        this.taxisConLicenciaVencida           = 0;
        this.taxistasSinRefrendar              = 0;
        this.taxisConSoatVencido               = 0;
        this.alertasDeVencimiento              = 0;
        this.taxisConTarjetaDeOperacionVigente = 0;
        this.vehiculoChatarrizados             = 0;
    }
}
export class Grafica {
    name:  string;
    value: number;
    color: string;
    constructor() {
        this.value = 0;
        this.name  = '';
        this.color = '';
    }
}


export interface Quejas {
    name:     string;
    id:       string;
    cantidad: number;
}
export interface Comentarios {
    name: string;
    id:   string;
}
export interface TaxistaEasy {
    idVinculacion : string;
    name          : string;
    surname       : string;
    img           : string;
    placa         : string;
    cantidad      : number;
}
export interface QuejaSiONoTramitada {
    comentarios : string[];
    email       : string;
    nombre      : string;
    telefono    : string;
    fecha       : string;
}
export interface PerfilDeVinculacion {
    datosDelConductor: {
        img                 : string,
        nombres             : string,
        apellidos           : string,
        licencia            : { value: string, fechaVencimiento: Date },
        fechaDeNacimiento   : Date,
        categoriaDeLicencia : string,
        EPS                 : string,
        ARL                 : string,
        fondoDePension      : string,
        sexo                : string,
        estadoCivil         : string,
        direccion           : string,
        telefono            : string,
        email               : string,
        grupoSanguineo      : string,
        RH                  : string
    },
    informacionComplementaria: {
        parentescoJefeHogar      : string,
        numeroDeHijos            : string,
        personasACargo           : string,
        estudiaActualmente       : string,
        nivelEducativo           : string,
        tipoDeDiscapacidad       : string,
        taxistaOcasional         : string,
        tiempoComoConductor      : string,
        realizaOtraLabor         : string,
        tiempoOtraLabor          : string,
        ingresosComoConductor    : string,
        ingresosOtraLabor        : string,
        estratoSocioeconomico    : string,
        tipoDeVivienda           : string,
        accesoAEnergia           : string,
        accesoAAgua              : string,
        accesoAGas               : string,
        accesoAAlcantarillado    : string,
        accesoARecoleccionBasura : string
    },
    datosDeLaEmpresa: {
        img             : string,
        nombre          : string,
        nit             : string,
        direccion       : string,
        lineaDeAtencion : string,
        email           : string
    },
    datosDelVehiculo: {
        placa                   : string,
        numeroDeCenso           : string,
        numeroDeMotor           : string,
        numeroDeChasis          : string,
        marca                   : string,
        modelo                  : string,
        cedulaDePropietario     : string,
        nombrePropietario       : string,
        direccionPropietario    : string,
        telefonoPropietario     : string,
        asociacion              : { value: string, tarjetaDeOperacion: string, vence: Date },
        soat                    : { value: string, aseguradora: string, vence: Date },
        tecnicoMecanica         : { value: string, vence: Date },
        seguroContractual       : { value: string, vence: Date },
        seguroExtracontractual  : { value: string, vence: Date }
    }
}
export interface Taxista {
    datosDelConductor: {
        img                 : string,
        nombres             : string,
        apellidos           : string,
        licencia            : { value: string, fechaVencimiento: Date },
        fechaDeNacimiento   : Date,
        categoriaDeLicencia : string,
        EPS                 : string,
        ARL                 : string,
        fondoDePension      : string,
        sexo                : string,
        estadoCivil         : string,
        direccion           : string,
        telefono            : string,
        email               : string,
        grupoSanguineo      : string,
        RH                  : string
    },
    informacionComplementaria: {
        parentescoJefeHogar      : string,
        numeroDeHijos            : string,
        personasACargo           : string,
        estudiaActualmente       : string,
        nivelEducativo           : string,
        tipoDeDiscapacidad       : string,
        taxistaOcasional         : string,
        tiempoComoConductor      : string,
        realizaOtraLabor         : string,
        tiempoOtraLabor          : string,
        ingresosComoConductor    : string,
        ingresosOtraLabor        : string,
        estratoSocioeconomico    : string,
        tipoDeVivienda           : string,
        accesoAEnergia           : string,
        accesoAAgua              : string,
        accesoAGas               : string,
        accesoAAlcantarillado    : string,
        accesoARecoleccionBasura : string
    },
    datosDeLaEmpresa: {
        img             : string,
        nombre          : string,
        nit             : string,
        direccion       : string,
        lineaDeAtencion : string,
        email           : string
    }
}
export interface GraficaCalificaciones {
    labels:   string[];
    datasets: Comentario[];
}
export interface Comentario {
    data:  number[];
    label: string;
}
export interface GraficaComentarios {
    labels:   string[];
    datasets: Comentario[];
}