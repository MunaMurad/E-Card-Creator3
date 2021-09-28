
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.page.html',
  styleUrls: ['./modal-content.page.scss'],
})
export class ModalContentPage implements OnInit {

  //@Input() website: string;


  constructor(
    private navParams: NavParams, 
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }
  close() {
    this.modalController.dismiss();
  }
}
