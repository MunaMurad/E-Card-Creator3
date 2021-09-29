import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController} from '@ionic/angular';

import { UserService } from '../../../services/user.service';
import { RealestateService } from '../../../services/realestate.service';
import { IonicComponentService } from '../../../services/ionic-component.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-real-profile',
  templateUrl: './real-profile.page.html',
  styleUrls: ['./real-profile.page.scss'],
})
export class RealProfilePage implements OnInit {

  userDetail: Observable<any>;
  //public updateForm: FormGroup;

  constructor(
    public userService: UserService,
    public realestateService: RealestateService,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService
  ) {

   }

  ngOnInit() {
    // this.userDetail = this.userService.getUserProfile();
    // this.userService.getUserProfile().subscribe(res => {
    //   console.log("Get user profile response="+res);
    
    // });
  }
  async ionViewWillEnter() {
    this.userDetail = this.userService.getUserProfile();
    this.userService.getUserProfile().subscribe(res => {
      console.log("Get user profile response="+res);
    
    });
  }
 async logout(){
  //  this.userService.signoutUser();
  //  this.router.navigateByUrl('/side-menu/travel/tabs/tab1');
  console.log("call logout")
  this.router.navigateByUrl('/logout?redirectUrl=/realestate');
  // await this.userService.signoutUser()
  // .then(() => {
  //   console.log("LOGOUT");
  //   this.router.navigateByUrl('/login?redirectUrl=side-menu/realestate/tabs/tab1');
  //     //loadingPopup.dismiss();
  //     //this.nav.setRoot('AfterLoginPage');
  // }, (error) => { 
  //    var errorMessage: string = error.message;
  //    console.log("ERROR:"+errorMessage);
  //     //loadingPopup.dismiss();
  //     //this.presentAlert(errorMessage);      
  // });

 }
}


