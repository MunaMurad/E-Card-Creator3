import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-two',
  templateUrl: './signin-two.page.html',
  styleUrls: ['./signin-two.page.scss'],
})
export class SigninTwoPage implements OnInit {

  public showPassword: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  //####### Show / hide password #######//
  public onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }
}
