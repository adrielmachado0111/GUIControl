import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from '../master-control/pages/dashboard/dashboard.component';
import { ProcesoComponent } from '../master-control/pages/proceso/proceso.component';
import { PermisosComponent } from '../master-control/pages/permisos/permisos.component';
import { ConfiguracionComponent } from '../master-control/pages/configuracion/configuracion.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'permisos', component: PermisosComponent },
      { path: 'proceso/:proceso', component: ProcesoComponent },
      { path: 'configuracion', component: ConfiguracionComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
