import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterControlRoutingModule } from './master-control-routing.module';
import { GraficaComponent } from './components/grafica/grafica.component';
import { ProcesoComponent } from './pages/proceso/proceso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PrimengModule } from '../primeng/primeng.module';
import { PermisosComponent } from './pages/permisos/permisos.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    GraficaComponent,
    ProcesoComponent,
    DashboardComponent,
    PermisosComponent,
    ConfiguracionComponent
  ],
  imports: [
    CommonModule,
    MasterControlRoutingModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    PrimengModule,
    MaterialModule
  ],
  exports: [
    ProcesoComponent
  ]
})
export class MasterControlModule { }
