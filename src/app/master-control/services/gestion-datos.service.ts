import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionDatosService {
  /* config initial */
  valorActual: number = 0;
  setPoint: number= 0;
  kp: number = 0;
  ti: number = 0;
  td: number = 0;
  /* config knob -> caracteristicas maximas se pueden config en el menu configuraciones*/
  color: string = '';
  max: number = 0;
  unidad: string = '';
  constructor() { }

  consultaProceso(proceso: string){
    /* peticion al servidor donde estan las vars del PLC
     */
    if(proceso === 'presión'){

      this.valorActual = 2.5;
      this.setPoint = 3.0;
      this.kp = 0.02;
      this.ti = 0.5;
      this.td = 0.002;

      this.color = '#55DD3F';
      this.max = 10;
      this.unidad = 'Bar'
    }
    else if(proceso === 'nivel'){
      this.valorActual = 3.0;
      this.setPoint = 4.0;
      this.kp = 2;
      this.ti = 0.55;
      this.td = 0.02;

      this.color = '#DDCD3F';
      this.max = 8;
      this.unidad = 'Metros'
    }
    else if(proceso === 'flujo'){
      this.valorActual = 1.22;
      this.setPoint = 2.0;
      this.kp = 5;
      this.ti = 0.005;
      this.td = 2;

      this.color = '#3FA4DD';
      this.max = 100;
      this.unidad = 'Lts/s'
    }
    else if(proceso === 'temperatura'){
      this.valorActual = 200.0;
      this.setPoint = 200.0;
      this.kp = 8;
      this.ti = 7;
      this.td = 6;

      this.color = '#9560EC';
      this.max = 1000;
      this.unidad = 'ºC'
    }
  }

}
