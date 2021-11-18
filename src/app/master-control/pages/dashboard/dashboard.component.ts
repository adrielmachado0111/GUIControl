import { Component, OnInit } from '@angular/core';

interface Knob {
  titulo: string,
  subtitulo: string,
  dato: number,
  color: string,
  max: number,
  unidad: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  misKnobs: Knob[] = [
    { titulo: 'flujo', subtitulo: 'Flujo actual', color: '#3FA4DD', dato: 2.5, max: 100, unidad: 'Lts/s' },
    { titulo: 'presión', subtitulo: 'Presión actual', color: '#55DD3F', dato: 6.5, max: 10, unidad: 'Bar' },
    { titulo: 'nivel', subtitulo: 'Nivel actual', color: '#DDCD3F', dato: 4.5, max: 8, unidad: 'Metros' },
    { titulo: 'temperatura', subtitulo: 'Temp. actual', color: '#9560EC',dato: 90.5, max: 1000, unidad: 'ºC' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
