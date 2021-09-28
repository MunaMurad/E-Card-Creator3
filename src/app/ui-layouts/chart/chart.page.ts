import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController, LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {


  public chart: Observable<any[]>;
  public chartArray: any = [];

  isDataAvailable: boolean = false;
  chartView: string = "Bar";
  //******************************************//

  chartData: ChartDataSets[] = [{ data: [], label: 'Total visitors' }];
  chartLabels: Label[];



  //chartData2: ChartDataSets[] = [{ data: [], label: 'Stock price' }];
  chartData2: ChartDataSets[] = [
    { data: [2500, 5900, 6000, 8100], label: 'Company A' },
    { data: [2800, 4800, 4000, 7900], label: 'Company B' }
  ];
  chartLabels2: Label[] = ['2013', '2014', '2015', '2016'];

  showLegend = true;

  //*********** Chart option  **************//


  verBarChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'bottom' },
    segmentShowStroke: false,
    //maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Total visitors'
    },
  };

  horBarChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'bottom' },
    segmentShowStroke: false,
    //maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Total visitors'
    },
  };

  pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'bottom' },
    segmentShowStroke: false,
    //maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Total visitors'
    },
  };

  lineChartOptions = {
    responsive: true,
    legend: { position: 'bottom' },
    maintainAspectRatio: false,
    scaleShowVerticalLines: false,
    segmentShowStroke: false,
    //maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Total visitors'
    }
  };

  halfDonutChartOptions: any = {
    responsive: true,
    legend: { position: 'bottom' },
    maintainAspectRatio: false,
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI
  };


  //*********** chart color theme   **************//

  chartColor1: any[] = [{
    borderWidth: 1,
    borderColor: 'white', backgroundColor: ['#d53e4f', '#f46d43', '#fdae61', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2']
  }];

  chartColor2: any[] = [{ backgroundColor: ['rgba(127,0,0, 0.2)', 'rgba(215,48,39,0.2)', 'rgba(244,109,67,0.2)', 'rgba(253,174,97,0.2)', 'rgba(254,224,139,0.2)', 'rgba(255,255,191,0.2)', 'rgba(217,239,139,0.2)', 'rgba(166,217,106,0.2)', 'rgba(102,189,99,0.2)', 'rgba(26,152,80,0.2)', 'rgba(0,104,55,0.2)'] }];

  chartColor3: any[] = [{ backgroundColor: ['rgba(127,0,0, 0.8)', 'rgba(179,0,0, 0.7)', 'rgba(215,48,31, 0.4)', 'rgba(239,101,72, 0.4)', 'rgba(252,141,89, 0.4)', 'rgba(253,187,132, 0.4)'] }];

  chartColor4: any[] = [{ backgroundColor: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a', '#01665e', '#003c30'] }];

  chartColor5: any[] = [{ backgroundColor: ['#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'] }];

  // for line chart //
  chartColor6: any[] = 
  [
    {     borderWidth: 1, backgroundColor: 'rgba(102, 194, 165, 0.76)' },
    {     borderWidth: 1, backgroundColor: 'rgba(127,0,0, 0.8)' },
  ];
  // for vertical bar chart
  chartColor7: Color[] = [
    {     borderWidth: 1, backgroundColor: '#d53e4f' },
    {     borderWidth: 1, backgroundColor: '#66c2a5' },
  ]
  //*********** Bar chart **************//

  // barChartOptions: ChartOptions = {
  //   responsive: true,
  //   scales: { xAxes: [{}], yAxes: [{}] },
  // };
  // barChartLabels: Label[] = ['2013', '2014', '2015', '2016', '2017', '2018'];
  // barChartType: ChartType = 'bar';
  // barChartLegend = true;
  // barChartPlugins = [];

  // chartData: ChartDataSets[] = [
  //   { data: [2500, 5900, 6000, 8100, 8600, 8050, 1200], label: 'Company A' },
  //   { data: [2800, 4800, 4000, 7900, 9600, 8870, 1400], label: 'Company B' }
  // ];





  constructor(
    private firestore: AngularFirestore,
    public menuCtrl: MenuController,
    private loadingController: LoadingController,
    private modalController: ModalController,
    public loadingPopup: LoadingController
  ) { }


  ngOnInit() {
    this.chart = this.firestore.collection<any>('layout_chart').valueChanges();
    this.chart.subscribe(res => {
      this.chartArray = res;

      console.log("chartArray=" + JSON.stringify(this.chartArray));
      setTimeout(() => {
        // loadingPopup.dismiss();
      }, 1000);


      this.chartLabels = [];
      this.chartData[0].data = [];

      for (let entry of this.chartArray) {
        this.chartLabels.push(entry.country);
        this.chartData[0].data.push(entry.view);
        //this.chartData[1].data.push(entry.view);
      }
      this.isDataAvailable = true;
    })
  }


}
