import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { ModalController,NavController, LoadingController,} from '@ionic/angular';

import { UserService } from '../../../services/user.service';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-shopping-address-add',
  templateUrl: './shopping-address-add.page.html',
  styleUrls: ['./shopping-address-add.page.scss'],
})
export class ShoppingAddressAddPage implements OnInit {
  public address: Observable<any[]>;

  public addressForm: FormGroup;
  private userProfileId: any;
  constructor( 
    public userService: UserService,

    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private modalController: ModalController,
    public router: Router,
    //public alertController: AlertController,
    private loadingController: LoadingController,
    public formBuilder: FormBuilder
  )
    { 
      //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
      console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('categoryId'));
      console.log(this.router.url,"Current URL");

      //this.placeId = this.activatedRoute.snapshot.paramMap.get('placeId');
      // Tips: If you can't bind to 'formGroup' since it isn't a known property of 'form'.
      //  ******Don't forgot to import FormsModule and ReactiveFormsModule into your <page-name>.module.ts and then add them to the imports array.
      // https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
      // https://stackoverflow.com/questions/53130244/cant-bind-to-formgroup-in-angular-7


      //https://jasonwatmore.com/post/2018/11/07/angular-7-reactive-forms-validation-example
      
          // this.addressForm = formBuilder.group({
          //   label: ['', Validators.compose([Validators.minLength(1), Validators.required])],
          //   //fullname: ['', Validators.compose([Validators.minLength(0), Validators.required])],
          //   phone: ['', Validators.compose([Validators.minLength(0), Validators.required])],
          //   address: ['', Validators.compose([Validators.minLength(0), Validators.required])]
          // });
          this.addressForm = this.formBuilder.group({
            label: ['', Validators.required],
            fullname: ['', Validators.required],
            phone: ['', [Validators.required, Validators.minLength(6)]],
            address: ['', Validators.required]

        }); 
 

    }


  ngOnInit() {

    this.userProfileId = this.userService.getUserId();
  }

  async close(){
    await this.modalController.dismiss();
  }

  submitFormTest(){
    if (!this.addressForm.valid){
      console.log(this.addressForm.value);
      //this.presentAlert("invalid form");
      console.log("invalid form")
    } else {
      console.log(this.addressForm.value);
      console.log("yes, ")
      //this.userService.loginUser()
    }
  }
  


  async addAddress(){
   // console.log("userProfileId="+this.userService.getUserId());
    console.log("_____call addAddress");
    if (!this.addressForm.valid){
      console.log(this.addressForm.value);
      console.log("____addressForm invalid ") 
      //this.presentAlert("invalid form");
    } else {
      //****** loading *******//
      const loading = await this.loadingController.create({
        //spinner: null,
        duration: 2000,
        message: '',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      //return await loading.present();
      await loading.present();




      //****** add review *******//

      await this.userService.addAddress(
        this.addressForm.value.label, 
        this.addressForm.value.fullname, 
        this.addressForm.value.phone,
        this.addressForm.value.address
      )
     // await console.log("2");
      .then(  () => {
           // call loading 
           // close loading
          this.close();
          //this.router.navigateByUrl('/food-checkout');
          //loadingPopup.dismiss();
          //this.nav.setRoot('AfterLoginPage');
      }, (error) => { 
         var errorMessage: string = error.message;
         console.log("ERROR:"+errorMessage);
         this.close();
          //loadingPopup.dismiss();
          //this.presentAlert(errorMessage);      
      });
  
    }
  }

}
