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
import { SelectComponent } from './select/select.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { EditAddDeleteComponent } from './edit-add-delete/edit-add-delete.component';



@NgModule({
  declarations: [
    SidebarComponent,
    CardSimpleComponent,
    PaginacionComponent,
    LoadingComponent,
    ExportExcelComponent,
    BarraBusquedaComponent,
    SelectComponent,
    DatetimeComponent,
    EditAddDeleteComponent
  ],
  exports: [
    SidebarComponent,
    CardSimpleComponent,
    PaginacionComponent,
    LoadingComponent,
    ExportExcelComponent,
    BarraBusquedaComponent,
    SelectComponent,
    DatetimeComponent,
    EditAddDeleteComponent
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
