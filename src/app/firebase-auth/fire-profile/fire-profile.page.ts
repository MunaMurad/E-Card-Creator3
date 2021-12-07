import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';

import { MenuController, NavController } from '@ionic/angular';
import { IonicComponentService } from '../../services/ionic-component.service';

import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fire-profile',
  templateUrl: './fire-profile.page.html',
  styleUrls: ['./fire-profile.page.scss'],
})
export class FireProfilePage implements OnInit {


  userAuth: boolean = false; // Is user logged in ?
  userDetail: Observable<any>;
  public updateForm: FormGroup;


  constructor(
    public userService: UserService,
    public menuCtrl: MenuController,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService,
    //private modalController: ModalController
    public  formBuilder: FormBuilder
  ) {
    /* this is as expression to validate email address.*/ 
    let EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  
 //the required information with the constraints on it.
    this.updateForm = formBuilder.group({
      firstname: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      lastname: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      email: ['', Validators.compose([Validators.minLength(0), Validators.required])],
      //phone: ['', Validators.compose([Validators.minLength(0), Validators.required])] 

    });
   }

  ngOnInit() {
    //this.ionicComponentService.presentLoading(); // call loading 
    this.ionicComponentService.presentTimeoutLoading(1000,true);
  }
  ionViewWillEnter() {
    this.userDetail = this.userService.getUserProfile();

    this.userService.getUserProfile().subscribe(res => {
      console.log("Get user profile response="+res);
    
    });
  }

  async updateProfile(){
    if (!this.updateForm.valid){
      console.log("no valid");
      console.log(this.updateForm.value);
      
    } else {
        // add to firebase
      this.ionicComponentService.presentLoading();

      console.log("YES");
      //the updated information 
        await this.userService.updateUserProfile(
          this.updateForm.value.firstname, 
          this.updateForm.value.lastname,
          this.updateForm.value.email,
          )
        .then(() => {
          //confirm the updated and navigate to setting
            this.ionicComponentService.presentToast(" تم تحديث الملف الشخصي | Profile updated",2000);
            this.ionicComponentService.dismissLoading();
            this.router.navigateByUrl('sett');
            
        }, (error) => { 
           var errorMessage: string = error.message;
           this.ionicComponentService.dismissLoading();
           this.ionicComponentService.presentAlert(errorMessage);
   
        });
           
    }    
  }


 async logout(){
  await this.userService.signoutUser()
  .then(() => {
    console.log("LOGOUT");
    this.ionicComponentService.presentTimeoutLoading(1000,true);
    this.ionicComponentService.presentToastWithOptions("Notification","log-out-outline","","You are logged out | لقد قمت بتسجيل الخروج","top",9000);
    this.router.navigateByUrl('fire-signin');
  }, (error) => { 
     var errorMessage: string = error.message;
     this.ionicComponentService.presentToast(errorMessage,3000);
     console.log("ERROR:"+errorMessage);
  });
 }
}

