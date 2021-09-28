import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-four',
  templateUrl: './form-four.page.html',
  styleUrls: ['./form-four.page.scss'],
})
export class FormFourPage implements OnInit {

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
