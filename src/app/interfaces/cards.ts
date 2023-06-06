export interface Cards {
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
}
export interface CardsEmpresa {
    taxisRegistrados:      number;
    taxistasRegistrados:   number;
    documentosVencidos:    number;
    alertasDeVencimiento:  number;
    vehiculoChatarrizados: number;
}