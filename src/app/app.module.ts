import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Self Library
import { MasterControlModule } from './master-control/master-control.module';
import { PrimengModule } from './primeng/primeng.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MasterControlModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    PrimengModule// quitar de aqui una vez crees los componentes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
