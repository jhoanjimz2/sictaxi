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