import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Material Module */
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    
    exports:[
        MatAutocompleteModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDividerModule,
        MatDialogModule,
        MatIconModule,
        MatTableModule,
        MatToolbarModule,
        MatSidenavModule,
        MatGridListModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatMenuModule,
        MatRadioModule,
        MatExpansionModule,
        MatSelectModule
        
    ]
})
export class MaterialModule { }
