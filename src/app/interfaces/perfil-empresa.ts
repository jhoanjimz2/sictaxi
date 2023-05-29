export interface RespGetPerfilEmpresa {
    id:                              number;
    direccion:                       string;
    email:                           string;
    telefono:                        string;
    nit:                             string;
    nombreRepresentante:             string;
    direccionRepresentante:          string;
    telefonoRepresentante:           string;
    razonSocial:                     string;
    logo:                            string;
    firma:                           null;
    fechaEliminacion:                null;
    fechaRegistro:                   string;
    fechaModificacion:               string;
    idUsuarioRegistro:               number;
    idUsuarioModificacion:           number;
    idUsuarioEliminacion:            null;
    idCiudad:                        string;
    tipoEmpresa:                     string;
    sigla:                           string;
    idCiudadPrincipal:               string;
    celular:                         string;
    cedulaRepresentante:             string;
    tipoIdentificacionRepresentante: string;
    idCiudadCedulaRepresentante:     string;
    tipoActoAdministrativo:          string;
    numeroActoAdministrativo:        string;
    fechaHabilitacion:               string;
    fechaInicioHabilitacion:         null;
    fechaFinHabilitacion:            null;
    radioAccion:                     null;
    modalidad:                       null;
    capacidadVinculada:              null;
    rolEmpresa:                      string;
    idMigration:                     null;
}
export interface UpdateProfileEmpresa {
    nit:                         string;
    razonSocial:                 string;
    sigla:                       string;
    idCiudadPrincipal:           string;
    direccion:                   string;
    telefono:                    string;
    celular:                     string;
    email:                       string;
    cedulaRepresentante:         string;
    idCiudadCedulaRepresentante: string;
    nombreRepresentante:         string;
    direccionRepresentante:      string;
    telefonoRepresentante:       string;
    fechaHabilitacion:           string;
    numeroActoAdministrativo:    string;
    capacidadVinculada:          string;
    id:                          string;
    foto:                        File;
    // foto:                        string;
}