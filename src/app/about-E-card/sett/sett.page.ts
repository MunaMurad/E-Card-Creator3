import { Component, OnInit , Renderer2 } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IonicComponentService } from '../../services/ionic-component.service';
import { ActivatedRoute , Router} from '@angular/router';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-sett',
  templateUrl: './sett.page.html',
  styleUrls: ['./sett.page.scss'],
})

export class SettPage implements OnInit {

 //ngx code
 langs:string []=[];
 constructor(private renderer:Renderer2,
   public userService: UserService,
   private ionicComponentService: IonicComponentService,
   public router: Router,
   private TranslateService:TranslateService) {
     this.langs=this.TranslateService.getLangs();
    }

   ngOnInit() {
   }
   async logout(){
     //  this.userService.signoutUser();
     //  this.router.navigateByUrl('/side-menu/travel/tabs/tab1');
     await this.userService.signoutUser()
     .then(() => {
       console.log("LOGOUT");
       this.ionicComponentService.presentTimeoutLoading(1000,true);
       this.ionicComponentService.presentToastWithOptions("Notification","log-out-outline","","You are logged out | لقد قمت بتسجيل الخروج","top",9000);
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

      //this code to select lang button
changelang(event){
 this.TranslateService.use(event.detail.value);
 console.log(event.detail.value);
}

}
