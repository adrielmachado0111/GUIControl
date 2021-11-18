import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
//import * as pluginAnnotations from 'chartjs-plugin-annotation';//chartjs-plugin-annotation
//import * as ChartAnnotation from  'chartjs-plugin-annotation';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
  ]
})
export class GraficaComponent implements OnInit {
  
  public lineChartData: ChartDataSets[] = [
    /* { data: [65, 59, 80, 81, 56, 55, 40], label: 'Mi desarrollo' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Aprendamos' }, */
    { data: [0, 13, 33, 13, 14, 12, 13, 12.5, 13, 12.9], label: 'Curva Control', yAxisID: 'y-axis-1' }
  ];
  public lineChartLabels: Label[] = ['100ms', '200ms', '300ms', '400ms', '500ms', '600ms', '700ms', '800ms', '900ms', '1000ms'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        /* {
          id: 'y-axis-0',
          position: 'left',
        }, */
        {
          id: 'y-axis-1',
          position: 'left',
          gridLines: {
            color: 'rgba(0,0,0,0.3)',
          },
          ticks: {
            fontColor: 'black',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: '200ms',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // naranja
      backgroundColor: 'rgba(246,134,60,0.2)',
      borderColor: '#F6863C', // se puede por rgba-> rgba(148,159,177,1)
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // verde
      backgroundColor: 'rgba(0,191,111,0.3)',
      borderColor: '#00BF6F',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  //public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart!: BaseChartDirective;

  constructor() { }

  ngOnInit(): void {
    
    //Chart.pluginService.register(ChartAnnotation);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
