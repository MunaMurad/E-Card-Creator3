import { Component, OnInit , Renderer2 } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IonicComponentService } from '../../services/ionic-component.service';
import { ActivatedRoute , Router} from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private renderer:Renderer2,
    public userService: UserService,
    private ionicComponentService: IonicComponentService,
    public router: Router) { }

  onToggleColorTheme(event: { detail: { checked: any; }; }){
    console.log(event.detail.checked);
    if (event.detail.checked){
      this.renderer.setAttribute(document.body,"color-theme",'dark')

  }else{
    this.renderer.setAttribute(document.body,"color-theme",'light')
  }
}  ngOnInit() {
}
async logout(){
  //  this.userService.signoutUser();
  //  this.router.navigateByUrl('/side-menu/travel/tabs/tab1');
  await this.userService.signoutUser()
  .then(() => {
    console.log("LOGOUT");
    this.ionicComponentService.presentTimeoutLoading(1000,true);
    this.ionicComponentService.presentToastWithOptions("Notification","notifications-outline","","You are logged out","top",9000);
    //this.ionicComponentService.presentToast("Logout",1000);
    this.router.navigateByUrl('fire-signin');
      //loadingPopup.dismiss();
      //this.nav.setRoot('AfterLoginPage');
  }, (error) => { 
     var errorMessage: string = error.message;
     this.ionicComponentService.presentToast(errorMessage,3000);
     console.log("ERROR:"+errorMessage);
      //loadingPopup.dismiss();
      //this.presentAlert(errorMessage);      
  });
 }


}
