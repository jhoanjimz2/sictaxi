export interface RespEmpresasAutorizadas {
    data:  EmpresaAutorizada[];
    pages: number;
}

export interface EmpresaAutorizada {
    nombreEmpresa: string;
    nit:           string;
    direccion:     string;
    telefono:      string;
    email:         string;
    logo:          string;
}
