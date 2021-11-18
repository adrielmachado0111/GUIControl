import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'control',
    loadChildren: () => import('./shared/shared.module').then( m => m.SharedModule )
  },
  {
    path: "**", redirectTo: 'control'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
