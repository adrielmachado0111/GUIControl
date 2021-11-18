import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SideComponent } from './side/side.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    SideComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
