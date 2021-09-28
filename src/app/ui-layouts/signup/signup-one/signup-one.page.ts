import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-one',
  templateUrl: './signup-one.page.html',
  styleUrls: ['./signup-one.page.scss'],
})
export class SignupOnePage implements OnInit {
  public showPassword: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  //####### Show / hide password #######//
  public onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }

}
