export interface Usuario {
    id:                      number;
    cedula:                  string;
    codigoRecuperacion:      null;
    fechaEliminacion:        null;
    fechaRegistro:           null;
    fechaUltimaModificacion: null;
    rol:                     string;
    idempresa:               number;
    nombres:                 string;
    apellidos:               string;
    telefono:                string;
    direccion:               string;
    email:                   string;
    idciudad:                number;
    fotoUrl:                 string;
    tipoImpresion:           string;
    tipoTarjeton:            string;
    solicitarCambioclave:    null;
    idUsuarioRegistro:       null;
    idUsuarioModificacion:   null;
    idUsuarioEliminacion:    null;
    idMigration:             null;
    uuid:                    string;
}
export interface RespListUsuarios {
    result: UsuarioList[];
}
export interface UsuarioList {
    razonSocial: string;
    id:          number;
    nombres:     string;
    apellidos:   string;
    cedula:      string;
    email:       string;
    rol:         string;
    direccion:   string;
    telefono:    string;
    fotoUrl:     string;
}
export interface RespGetUser {
    id:                      number;
    cedula:                  string;
    codigoRecuperacion:      string;
    fechaEliminacion:        Date;
    fechaRegistro:           string;
    fechaUltimaModificacion: Date;
    rol:                     string;
    idempresa:               number;
    nombres:                 string;
    apellidos:               string;
    telefono:                string;
    direccion:               string;
    email:                   string;
    idciudad:                number;
    fotoUrl:                 string;
    tipoImpresion:           string;
    tipoTarjeton:            string;
    solicitarCambioclave:    number;
    idUsuarioRegistro:       string;
    idUsuarioModificacion:   string;
    idUsuarioEliminacion:    string;
    idMigration:             string;
    uuid:                    string;
}
export interface GetEmpresas {
    id:                              number;
    direccion:                       string;
    email:                           string;
    telefono:                        string;
    nit:                             string;
    nombreRepresentante:             string;
    direccionRepresentante:          null | string;
    telefonoRepresentante:           null | string;
    razonSocial:                     string;
    logo:                            null | string;
    firma:                           null;
    fechaEliminacion:                null;
    fechaRegistro:                   null | string;
    fechaModificacion:               null | string;
    idUsuarioRegistro:               number | null;
    idUsuarioModificacion:           number | null;
    idUsuarioEliminacion:            null;
    idCiudad:                        null | string;
    tipoEmpresa:                     null | string;
    sigla:                           null | string;
    idCiudadPrincipal:               null | string;
    celular:                         null | string;
    cedulaRepresentante:             null | string;
    tipoIdentificacionRepresentante: null | string;
    idCiudadCedulaRepresentante:     null | string;
    tipoActoAdministrativo:          null | string;
    numeroActoAdministrativo:        null | string;
    fechaHabilitacion:               null | string;
    fechaInicioHabilitacion:         null;
    fechaFinHabilitacion:            null;
    radioAccion:                     null;
    modalidad:                       null;
    capacidadVinculada:              null;
    rolEmpresa:                      string;
    idMigration:                     null | string;
}
export interface ActualizarUsuario {
    cedula:               string;
    nombres:              string;
    apellidos:            string;
    direccion:            string;
    telefono:             string;
    email:                string;
    idEmpresa:            number;
    rol:                  string;
    nueva:                string;
    solicitarCambioclave: boolean;
    confirmacion:         string;
}
export interface ActualizarPerfilUsuario {
    cedula:               string;
    nombres:              string;
    apellidos:            string;
    direccion:            string;
    telefono:             string;
    email:                string;
    tipoImpresion:        string;
    tipoTarjeton:         string;
}
export interface CambiarPassword {
    actual:       string;
    nueva:        string;
    confirmacion: string;
}