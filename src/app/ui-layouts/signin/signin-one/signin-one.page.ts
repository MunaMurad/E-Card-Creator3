import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-one',
  templateUrl: './signin-one.page.html',
  styleUrls: ['./signin-one.page.scss'],
})
export class SigninOnePage implements OnInit {

  public showPassword: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  //####### Show / hide password #######//
  public onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }
}