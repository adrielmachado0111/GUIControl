import { NgModule } from '@angular/core';

import { KnobModule } from 'primeng/knob';
import { TieredMenuModule } from 'primeng/tieredmenu';


@NgModule({
  exports: [
    KnobModule,
    TieredMenuModule,
    
  ]
})
export class PrimengModule { }
