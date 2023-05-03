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