import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { NavController,ModalController} from '@ionic/angular';

import { UserService } from '../../../services/user.service';
import { FoodService } from '../../../services/food.service';
import { IonicComponentService} from '../../../services/ionic-component.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-food-address-edit',
  templateUrl: './food-address-edit.page.html',
  styleUrls: ['./food-address-edit.page.scss'],
})
export class FoodAddressEditPage implements OnInit {

 

  //public address: Observable<any[]>;
  //public addressArray: any = [];
  public addressId: string;
  public addressForm: FormGroup;
  
  constructor( 
    public userService: UserService,
    public foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private modalController: ModalController,
    //public alertController: AlertController,
    private ionicComponentService: IonicComponentService,
    public formBuilder: FormBuilder
  )
    { 

    this.addressId = this.activatedRoute.snapshot.paramMap.get('addressId');
    this.addressForm = this.formBuilder.group({
      label: ['', Validators.required],
      fullname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required]

  }); 

    }

  ngOnInit() {
   
    //this.address = this.userService.getAddressById(this.addressId);
    this.userService.getAddressById(this.addressId).subscribe(res => {
      console.log("----->actionArray="+res);
      console.log("Get user profile response="+res);

      this.addressForm.get('label').setValue( res.label);
      this.addressForm.get('fullname').setValue( res.fullname);
      this.addressForm.get('phone').setValue( res.phone);
      this.addressForm.get('address').setValue( res.address);
      //this.addressArray = res;
    });
  }
  async close(){
    await this.modalController.dismiss();
  }

  
  // openMap(categoryId) {
    
  //   console.log("openMap");
  //   this.modalController.create({
  //     component: TravelMapPage,
  //     componentProps: {
  //       categoryId: categoryId
  //     }
  //   }).then(modal => {
  //     modal.present();
  //   });
  // }

  async editAddress(){
    // console.log("userProfileId="+this.userService.getUserId());
     console.log("_____call addAddress");
     if (!this.addressForm.valid){
        console.log(this.addressForm.value);
        console.log("____addressForm invalid ") 
        //this.presentAlert("invalid form");
     } else {
      console.log(this.addressForm.value);
        this.ionicComponentService.presentLoading();
        await this.userService.editAddress(
          this.addressId,
          this.addressForm.value.label, 
          this.addressForm.value.fullname, 
          this.addressForm.value.phone,
          this.addressForm.value.address
        )
       .then(  () => {
           this.ionicComponentService.dismissLoading();
           this.close();
           //this.router.navigateByUrl('/food-address');
       }, (error) => { 
          var errorMessage: string = error.message;
          console.log("ERROR:"+errorMessage);

          this.ionicComponentService.dismissLoading();   
          this.ionicComponentService.presentToast(errorMessage,4000);  
          this.close();
       });
   
     }
   }

   async delAddress(){
       this.ionicComponentService.presentLoading();
       await this.userService.deleteAddress(this.addressId,)
       .then(  () => {
            // call loading 
          this.ionicComponentService.dismissLoading();
          this.close();
           //this.router.navigateByUrl('/food-address');
       
       }, (error) => { 
          var errorMessage: string = error.message;
          console.log("ERROR:"+errorMessage);
          
          this.ionicComponentService.dismissLoading();
          this.ionicComponentService.presentToast(errorMessage,4000);  
          this.close();
       });
   }


}

