import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ActualizarUsuario, GetEmpresas, RespGetUser } from 'src/app/interfaces';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

export interface DialogData {
  id: number;
  type: boolean;
}

@Component({
  selector: 'app-modal-crear-usuario',
  templateUrl: './modal-crear-usuario.component.html',
  styleUrls: ['./modal-crear-usuario.component.scss']
})
export class ModalCrearUsuarioComponent {
  form: FormGroup = this.fb.group({
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    cedula: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    contra: new FormControl('', [Validators.required]),
    newcontra: new FormControl('', [Validators.required]),
    rol: new FormControl('', [Validators.required]),
    empresa: new FormControl('', [Validators.required]),
    solicitar: new FormControl(false, [Validators.required]),
  });
  empresas: GetEmpresas[] = [];
  constructor(
    private dialogRef: MatDialogRef<ModalCrearUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private loading: LoadingService,
    private eS: EstadisticasService,
    private fb: FormBuilder
  ) {
    this.cargarEmpresas();
    if ( data.type ) this.cargarData();
  }

  cargarEmpresas() {
    this.eS.getEmpresas().subscribe({
      next: (data: GetEmpresas[]) => {
        this.empresas = data;
      }
    })
  }

  cargarData() {
    this.loading.show();
    this.eS.getDataUser(this.data.id).subscribe({
      next: (data: RespGetUser) => {
        this.rellenar(data);
      }, error: () => {
        this.loading.hide();
        this.dialogRef.close();
        this.loading.error('Error al cargar usuario, comuniquese con el administrador de la base de datos');
      }
    })
  }

  rellenar(data: RespGetUser) {
    this.form.controls['nombres'].setValue(data.nombres);
    this.form.controls['apellidos'].setValue(data.apellidos);
    this.form.controls['cedula'].setValue(data.cedula);
    this.form.controls['direccion'].setValue(data.direccion);
    this.form.controls['telefono'].setValue(data.telefono);
    this.form.controls['email'].setValue(data.email);
    this.form.controls['rol'].setValue(data.rol);
    this.form.controls['empresa'].setValue(data.idempresa);
    this.form.controls['solicitar'].setValue(data.solicitarCambioclave);
    this.form.controls['contra'].setValue('');
    this.form.controls['newcontra'].setValue('');
    this.loading.hide();
  }

  guardar() {
    if(this.form.value['password'] != this.form.value['newpassword']) return this.loading.error('Las contraseñas no son iguales');
    if(!this.form.valid) return this.loading.error('Todos los campos son requeridos');
    let data: ActualizarUsuario = {} as ActualizarUsuario;

    data.nombres = this.form.controls['nombres'].value;
    data.apellidos = this.form.controls['apellidos'].value;
    data.cedula = this.form.controls['cedula'].value;
    data.direccion = this.form.controls['direccion'].value;
    data.telefono = this.form.controls['telefono'].value;
    data.email = this.form.controls['email'].value;
    data.rol = this.form.controls['rol'].value;
    data.idEmpresa = this.form.controls['empresa'].value;
    data.solicitarCambioclave = this.form.controls['solicitar'].value;
    data.nueva = this.form.controls['contra'].value;
    data.confirmacion = this.form.controls['newcontra'].value;

    this.loading.show();
    var servicio: Observable<any>;
    if (this.data.type ) servicio = this.eS.updateUser(data);
    else servicio = this.eS.crearUser(data);
    servicio.subscribe({
      next: (data: RespGetUser) => {
        this.loading.exito(`Usuario ${ this.data.type ? 'actualizado' : 'creado' } con exito`);
        this.loading.hide();
        this.dialogRef.close(true)
      }, error: () => {
        this.loading.hide();
        this.dialogRef.close(false);
        this.loading.error(`Error ${ this.data.type ? 'actualizar' : 'crear' } usuario, comuniquese con el administrador de la base de datos`);
      }
    })
  }
}
