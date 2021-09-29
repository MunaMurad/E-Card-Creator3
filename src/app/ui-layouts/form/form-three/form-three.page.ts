import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.page.html',
  styleUrls: ['./form-three.page.scss'],
})
export class FormThreePage implements OnInit {
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
