import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


interface Menu{
   texto: string,
   icon: string,
   ruta: string
}

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styles: [`
  .material-icons{
      margin-right: 8px;
    }
  `
  ]
})
export class SideComponent implements OnInit {

   miMenu: Menu[] = [
      { texto: 'Dashboard', icon: 'speed', ruta: '/control/dashboard' },
      { texto: 'Proceso', icon: 'precision_manufacturing', ruta: '/control/proceso' },
      { texto: 'Permisos', icon: 'key', ruta: '/control/permisos' },
      { texto: 'Configuración', icon: 'settings', ruta: '/control/configuracion' },
   ]

   typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  /* Listado de items */
  items!: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
         label:'Dashboard',
         icon:'material-icons-outlined cable'
      },
      {
         label:'Planta',
         icon:'pi pi-fw pi-building',
         items:[
            {
               label:'Flujo',
               icon:'pi pi-fw pi-align-left'
            },
            {
               label:'Presión',
               icon:'pi pi-fw pi-align-right'
            },
            {
               label:'Nivel',
               icon:'pi pi-fw pi-align-center'
            },
            {
               label:'Temperatura',
               icon:'pi pi-fw pi-align-justify'
            },

         ]
      },
      {
         label:'Permisos',
         icon:'pi pi-fw pi-key',
         items:[
            {
               label:'New',
               icon:'pi pi-fw pi-user-plus',

            },
            {
               label:'Delete',
               icon:'pi pi-fw pi-user-minus',

            },
            {
               label:'Search',
               icon:'pi pi-fw pi-users',
               items:[
                  {
                     label:'Filter',
                     icon:'pi pi-fw pi-filter',
                     items:[
                        {
                           label:'Print',
                           icon:'pi pi-fw pi-print'
                        }
                     ]
                  },
                  {
                     icon:'pi pi-fw pi-bars',
                     label:'List'
                  }
               ]
            }
         ]
      },
      {
         separator:true
      },
      {
         label:'Configuración',
         icon:'pi pi-fw pi-cog'
      }
  ];

  }

}
