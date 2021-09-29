import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.page.html',
  styleUrls: ['./empty-state.page.scss'],
})
export class EmptyStatePage implements OnInit {


  styleView: string = "style1";
  constructor() { }

  ngOnInit() {
  }

}
