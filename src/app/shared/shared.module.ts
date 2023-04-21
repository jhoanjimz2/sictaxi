import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CardSimpleComponent } from './card-simple/card-simple.component';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { MaterialModule } from '../material/material.module';
import { LoadingComponent } from './loading/loading.component';
import { ExportExcelComponent } from './export-excel/export-excel.component';
import { PipesModule } from '../pipes/pipes.module';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatetimeComponent } from './datetime/datetime.component';
import { EditAddDeleteComponent } from './edit-add-delete/edit-add-delete.component';
import { SelectNegComponent } from './select-neg/select-neg.component';
import { SelectPosComponent } from './select-pos/select-pos.component';



@NgModule({
  declarations: [
    SidebarComponent,
    CardSimpleComponent,
    PaginacionComponent,
    LoadingComponent,
    ExportExcelComponent,
    BarraBusquedaComponent,
    DatetimeComponent,
    EditAddDeleteComponent,
    SelectNegComponent,
    SelectPosComponent
  ],
  exports: [
    SidebarComponent,
    CardSimpleComponent,
    PaginacionComponent,
    LoadingComponent,
    ExportExcelComponent,
    BarraBusquedaComponent,
    DatetimeComponent,
    EditAddDeleteComponent,
    SelectNegComponent,
    SelectPosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    PipesModule,
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
