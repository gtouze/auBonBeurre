import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nantes',
  templateUrl: './uniteUn.component.html',
  styleUrls: ['./uniteUn.component.scss']
})
export class UniteUnComponent implements OnInit {
  dataSource: Object;
  chartConfig: Object;
  lineChartConfig:Object;
  lineDataSource:Object;


  constructor() {
    this.chartConfig = {
      width: '700',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
    };

    this.dataSource = {
      "chart": {
        "caption": "Relevé Cuve du: 01/07/2019",
        "subCaption": "",
        "xAxisName": "Poid du lait présent dans la cuve",
        "yAxisName": "Capacité de la cuve (en L)",
        "numberSuffix": "L",
        "theme": "candy",
      },
      "data": [{
        "label": "17h",
        "value": "3600"
      }, {
        "label": "18h",
        "value": "3842"
      }, {
        "label": "19h",
        "value": "4000"
      }]
    };

    this.lineChartConfig = {
      width : '600',
      height : '400',
      type : 'line',
      dataFormat : 'json',
      dataSource : 'data',
    }

    this.lineDataSource = {
        chart: {
          caption: "Température de la cuve du 01/07/19",
          yaxisname: "Température de la cuve en degré °C",
          subcaption: "[00h-00h]",
          numbersuffix: "°C",
          rotatelabels: "1",
          setadaptiveymin: "1",
          theme: "candy"
        },
        data: [
          {
            label: "00h",
            value: "2.5"
          },
          {
            label: "1h",
            value: "2.7"
          },
          {
            label: "2h",
            value: "2.8"
          },
          {
            label: "3h",
            value: "2.9"
          },
          {
            label: "4h",
            value: "3.1"
          },
          {
            label: "5h",
            value: "2.9"
          },
          {
            label: "6h",
            value: "3.0"
          },
          {
            label: "7h",
            value: "3.5"
          },
          {
            label: "8h",
            value: "4.0"
          },
          {
            label: "9h",
            value: "2.6"
          },
          {
            label: "10h",
            value: "2.6"
          },
          {
            label: "11h",
            value: "2.7"
          }]
    };
  }

  ngOnInit() {
  }

}

