import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.page.html',
  styleUrls: ['./form-two.page.scss'],
})
export class FormTwoPage implements OnInit {
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
