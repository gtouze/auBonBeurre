import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unite-cinq',
  templateUrl: './uniteCinq.component.html',
  styleUrls: ['./uniteCinq.component.scss']
})
export class UniteCinqComponent implements OnInit {
  dataSource: Object;
  chartConfig: Object;

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
  }

  ngOnInit() {
  }

}
