import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPerfilTaxistaComponent } from './modal-perfil-taxista/modal-perfil-taxista.component';
import { PipesModule } from '../pipes/pipes.module';
import { MaterialModule } from '../material/material.module';
import { ModalQuejasTramitadasComponent } from './modal-quejas-tramitadas/modal-quejas-tramitadas.component';
import { ModalEliminarEmpresaComponent } from './modal-eliminar-empresa/modal-eliminar-empresa.component';
import { ModalEliminarAsociacionComponent } from './modal-eliminar-asociacion/modal-eliminar-asociacion.component';
import { SharedModule } from '../shared/shared.module';
import { ModalBloquearConductorComponent } from './modal-bloquear-conductor/modal-bloquear-conductor.component';
import { ModalCrearEmpresaComponent } from './modal-crear-empresa/modal-crear-empresa.component';
import { ModalCrearAsociacionComponent } from './modal-crear-asociacion/modal-crear-asociacion.component';
import { ModalCrearUsuarioComponent } from './modal-crear-usuario/modal-crear-usuario.component';
import { ModalEliminarUsuarioComponent } from './modal-eliminar-usuario/modal-eliminar-usuario.component';
import { ModalCambiarPasswordComponent } from './modal-cambiar-password/modal-cambiar-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalEliminarMatriculaComponent } from './modal-eliminar-matricula/modal-eliminar-matricula.component';
import { ModalCrearParametroComponent } from './modal-crear-parametro/modal-crear-parametro.component';
import { ModalEliminarParametroComponent } from './modal-eliminar-parametro/modal-eliminar-parametro.component';
import { ModalBuenasCalificacionesComponent } from './modal-buenas-calificaciones/modal-buenas-calificaciones.component';
import { FasesExportarComponent } from './fases-exportar/fases-exportar.component';
import { ModalDesbloquearConductorComponent } from './modal-desbloquear-conductor/modal-desbloquear-conductor.component';
import { ModalInitCambiarPasswordComponent } from './modal-init-cambiar-password/modal-init-cambiar-password.component';
import { ModalCambiarImgProfileComponent } from './modal-cambiar-img-profile/modal-cambiar-img-profile.component';
import { WebcamModule } from 'ngx-webcam';
import { ModalTomarFotoComponent } from './modal-tomar-foto/modal-tomar-foto.component';
import { ModalDesvincularComponent } from './modal-desvincular/modal-desvincular.component';
import { ModalExcelCalificacionesComponent } from './modal-excel-calificaciones/modal-excel-calificaciones.component';
import { ModalConfirmAlertComponent } from './modal-confirm-alert/modal-confirm-alert.component';


@NgModule({
  declarations: [
    ModalPerfilTaxistaComponent,
    ModalQuejasTramitadasComponent,
    ModalCrearEmpresaComponent,
    ModalEliminarEmpresaComponent,
    ModalCrearAsociacionComponent,
    ModalEliminarAsociacionComponent,
    ModalBloquearConductorComponent,
    ModalCrearUsuarioComponent,
    ModalEliminarUsuarioComponent,
    ModalCambiarPasswordComponent,
    ModalEliminarMatriculaComponent,
    ModalCrearParametroComponent,
    ModalEliminarParametroComponent,
    ModalBuenasCalificacionesComponent,
    FasesExportarComponent,
    ModalDesbloquearConductorComponent,
    ModalInitCambiarPasswordComponent,
    ModalCambiarImgProfileComponent,
    ModalTomarFotoComponent,
    ModalDesvincularComponent,
    ModalExcelCalificacionesComponent,
    ModalConfirmAlertComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule,
    SharedModule,
    ReactiveFormsModule,
    WebcamModule,
    FormsModule
  ]
})
export class ModalsModule { }
