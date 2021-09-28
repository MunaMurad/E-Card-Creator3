import { Component, OnInit } from '@angular/core';
import {  } from '@ionic/angular';
import { IonicComponentService } from '../../services/ionic-component.service';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {



  constructor(    private ionicComponentService: IonicComponentService,) {}


  ngOnInit() {
  }

  async toast() {
    this.ionicComponentService.presentToast("message",1000);
  }

  async presentToastWithOptions() {
    this.ionicComponentService.presentToastWithOptions("Header","notifications-outline","Yeah!","message","top",9000);
  } 
}
