import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { MenuController,NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { IonicComponentService } from '../../services/ionic-component.service';

@Component({
  selector: 'app-fire-signup',
  templateUrl: './fire-signup.page.html',
  styleUrls: ['./fire-signup.page.scss'],
})
export class FireSignupPage implements OnInit {
  public showPassword: boolean = false;
  redirectUrl: string;
  public registerForm: FormGroup;
  
  constructor(
  
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public menuCtrl: MenuController,
    private userService:  UserService,
    private ionicComponentService: IonicComponentService,
    //****** form validation ********//
    public  formBuilder: FormBuilder
  ) { 
    
   /* this is as expression to validate email address.*/ 
    let EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  
    this.registerForm = formBuilder.group({
      firstname: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      lastname: ['', Validators.compose([Validators.minLength(3), Validators.required])],
     // phone: ['', Validators.compose([Validators.minLength(2), Validators.required])],
      username:  ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      password:  ['', Validators.compose([Validators.minLength(6), Validators.required])],
    });
  }
  
  ngOnInit() {
    this.redirectUrl = this.activatedRoute.snapshot.queryParamMap.get('redirectUrl');
     console.log("redirectUrl="+this.redirectUrl)
  }

  submitFormTest(){
    if (!this.registerForm.valid){
      console.log(this.registerForm.value);
      console.log("invalid form")
    } else {
      console.log(this.registerForm.value);
      console.log("yes, ")
    }
  }

  async registerUser(){
    console.log("call signopUser");
    if (!this.registerForm.valid){
      console.log(this.registerForm.value);
      console.log("invalid form")
    } else {
      this.ionicComponentService.presentLoading();
      console.log(this.registerForm.value);
      console.log("yes, ")
      await this.userService.signupUser(
        this.registerForm.value.firstname, 
        this.registerForm.value.lastname,
        this.registerForm.value.username, 
        this.registerForm.value.password
      )
      .then(() => {
        this.ionicComponentService.dismissLoading();
        if(this.redirectUrl){
          this.router.navigateByUrl('/'+this.redirectUrl);
        }else{
          this.router.navigateByUrl('/beginning');
        }
      }, 
      (error) => { 
         var errorMessage: string = error.message;
         this.ionicComponentService.dismissLoading();
         this.ionicComponentService.presentAlert(errorMessage);      
      });
  
    }
  }

  // Show / hide password //
  public onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }


  }
  