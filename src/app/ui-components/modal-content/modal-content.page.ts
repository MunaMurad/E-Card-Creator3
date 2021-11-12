
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.page.html',
  styleUrls: ['./modal-content.page.scss'],
})
export class ModalContentPage implements OnInit {

  @Input() qrcode: any;
  //qrvalue:any;

  constructor(
    private navParams: NavParams, 
    private modalController: ModalController
  ) { 
    console.log("before modal poping up : ",this.qrcode)
  }

  ngOnInit() {
  }
  close() {
    this.modalController.dismiss();
  }
}
