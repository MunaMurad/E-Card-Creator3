import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.page.html',
  styleUrls: ['./form-one.page.scss'],
})
export class FormOnePage implements OnInit {

  rating: number=1;
  public showPassword: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  //####### Show / hide password #######//
  public onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }
}
