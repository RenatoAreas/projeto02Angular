import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  grafico: Chart = new Chart();

  constructor() { }

  ngOnInit(): void {

    //desenhando o gráfico
    var dados: any[] = [
      {
        name: '25/09/2021',
        y: 6
      },
      {
        name: '26/09/2021',
        y: 8
      },
      {
        name: '27/09/2021',
        y: 14
      },
      {
        name: '28/09/2021',
        y: 11
      },
      {
        name: '29/09/2021',
        y: 18
      }
    ];

    var nomes: any[] = [
      ['25/09/2021'],
      ['26/09/2021'],
      ['27/09/2021'],
      ['28/09/2021'],
      ['29/09/2021']
    ];

    this.grafico = new Chart({
      chart: { type: 'line' },
      title: { text: 'Quantidade de contatos cadastrados por data' },
      subtitle: { text: 'Contagem de contatos de acordo com a data de cadastro' },
      xAxis: { categories: nomes },
      yAxis: { title: { text: 'Quantidade de contatos cadastrados por data' } },
      legend: { enabled: false },
      credits: { enabled: false },
      series: [
        { data: dados, type: undefined as any }
      ],
      tooltip: {
        headerFormat: '<span style="font-size: 12pt">{point.key}</span><table>',
        pointFormat: '<tr><td style="padding: 0">Quantidade de contatos: <strong>{point.y}</strong></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      }
    });
  }

}
