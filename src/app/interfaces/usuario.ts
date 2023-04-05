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
    fotoUrl:                 null;
    tipoImpresion:           string;
    tipoTarjeton:            string;
    solicitarCambioclave:    null;
    idUsuarioRegistro:       null;
    idUsuarioModificacion:   null;
    idUsuarioEliminacion:    null;
    idMigration:             null;
    uuid:                    string;
}
