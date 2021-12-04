import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { MenuController, Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  loggedIn = false;
  dark = false;
  
  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private TranslateService :TranslateService,
    // private userData: UserData,
    // private swUpdate: SwUpdate,
  
  
    private toastCtrl: ToastController,
    
  ) {
    this.TranslateService.setDefaultLang("ar");
    this.TranslateService.addLangs(["en","ar"]);
   

  }
  changeLocale(locale:string){
    this.TranslateService.use(locale);
  }
  
  


  ngOnInit() {
   }
  }


