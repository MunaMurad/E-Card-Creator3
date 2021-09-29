import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-two',
  templateUrl: './signup-two.page.html',
  styleUrls: ['./signup-two.page.scss'],
})
export class SignupTwoPage implements OnInit {
  public showPassword: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  //####### Show / hide password #######//
  public onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }
}
