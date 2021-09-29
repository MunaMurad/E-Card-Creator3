import { Injectable } from '@angular/core';
import { MenuController,LoadingController ,AlertController,ToastController} from '@ionic/angular';
import { IconPage } from '../ui-components/icon/icon.page';

@Injectable({
  providedIn: 'root'
})
export class IonicComponentService {

  isLoading = false;
  constructor(
    private loadingController: LoadingController,
    private alertController: AlertController,
    private toastController: ToastController,
    public menuCtrl: MenuController,
  ) { }

//https://stackoverflow.com/questions/52574448/ionic-4-loading-controller-dismiss-is-called-before-present-which-will-ke
//**********************************//
//****** Loading component    ******//
//**********************************//

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      spinner: "crescent",
      duration: 10000,
      //   message: 'Please wait...',
       translucent: true,
       cssClass: 'loadingDialog'
      //duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async presentTimeoutLoading(timeout: number,translucent:boolean) {
    this.isLoading = true;
    return await this.loadingController.create({
      spinner: "crescent",
      duration: timeout,
      //   message: 'Please wait...',
       translucent: translucent,
       cssClass: 'loadingDialog'
      //duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }


//**********************************//
//****** Alert component    ******//
//**********************************//
async presentAlert(msg) {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: '',
    message: msg,
    buttons: ['OK']
  });
  await alert.present();
}

//**********************************//
//****** Toast  component    ******//
//**********************************//
async presentToast(msg,duration) {
  const toast = await this.toastController.create({
    message: msg,
    duration: duration,
    color:"dark"
  });
  toast.present();
}

async presentToastWithOptions(header,iconname,icontext,msg,position,duration) {
  const toast = await this.toastController.create({
    header: header,
    message: msg,
    duration: duration,
    color:"dark",
    position: position,
    buttons: [
      {
        side: 'start',
        icon: iconname,
        text: icontext,
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  toast.present();
}
//**********************************//
//****** Toggle sidemenu      ******//
//**********************************//
sideMenu() {
  console.log("toggle sidemenu")
  this.menuCtrl.toggle(); //Add this method to your button click function
}



}
