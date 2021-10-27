import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-congratulate',
  templateUrl: './congratulate.page.html',
  styleUrls: ['./congratulate.page.scss'],
})
export class CongratulatePage implements OnInit {

  selectedItem: string = "one";


  constructor() { }

  ngOnInit() {
  }

}
