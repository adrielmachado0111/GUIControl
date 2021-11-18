import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionDatosService } from '../../services/gestion-datos.service';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styles: [`
  mat-form-field.mat-form-field {
  font-size: 18px;
  }
  
  `
  ]
})
export class ProcesoComponent implements OnInit {

  valorActual: number = 40.0;
  value:number = 40;

  valorParametro: string = '';
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              public gestionDatos: GestionDatosService
    ) { }

  ngOnInit(): void {
    /* al iniciar: 
    1) recibo los parametros de la ruta, para saber de que proceso se cargaran los datos 
    2) hacer peticion http para consultar en la base de datos y extraer los datos
    */
    //this.activatedRoute.queryParams.subscribe(params => console.log('queryParams', params))
    const proceso = this.activatedRoute.snapshot.paramMap.get('proceso');
    console.log(proceso);
    this.gestionDatos.consultaProceso(proceso!);
  }

}
