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
    let EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  
// Tips: If you can't bind to 'formGroup' since it isn't a known property of 'form'.
//  ******Don't forgot to import FormsModule and ReactiveFormsModule into your <page-name>.module.ts and then add them to the imports array.
// https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
// https://stackoverflow.com/questions/53130244/cant-bind-to-formgroup-in-angular-7

    this.updateForm = formBuilder.group({
      firstname: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      lastname: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      email: ['', Validators.compose([Validators.minLength(0), Validators.required])],
      phone: ['', Validators.compose([Validators.minLength(0), Validators.required])]
      

    });
   }

  ngOnInit() {
    //this.ionicComponentService.presentLoading(); // call loading 
    this.ionicComponentService.presentTimeoutLoading(1000,true);
  }
  ionViewWillEnter() {
    this.userDetail = this.userService.getUserProfile();

    //this.userAuth =  await this.userService.isLoggedIn();

    this.userService.getUserProfile().subscribe(res => {
      console.log("Get user profile response="+res);
    
    });
  }

  async updateProfile(){
    if (!this.updateForm.valid){
      console.log("no valid");
      console.log(this.updateForm.value);
      //this.presentAlert("invalid form");
    } else {
     // console.log("itemId="+this.itemId);
        // add to firebase
      this.ionicComponentService.presentLoading();

      console.log("YES");
        await this.userService.updateUserProfile(
          this.updateForm.value.firstname, 
          this.updateForm.value.lastname,
          this.updateForm.value.phone,
          this.updateForm.value.email
        )
        .then(() => {
            this.ionicComponentService.presentToast("Profile updated",2000);
            this.ionicComponentService.dismissLoading();
            //this.router.navigateByUrl('fire-profile');
            //this.nav.setRoot('AfterLoginPage');
        }, (error) => { 
           var errorMessage: string = error.message;
           this.ionicComponentService.dismissLoading();
           this.ionicComponentService.presentAlert(errorMessage);
   
        });
        //this.firestore.doc('item/'+this.itemId).update(postData);
        //this.router.navigateByUrl('crud-item');    
    }    
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

