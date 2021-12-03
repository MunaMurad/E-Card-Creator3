import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { MenuController , NavController } from '@ionic/angular';
import { IonicComponentService } from '../../services/ionic-component.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-fire-forgot',
  templateUrl: './fire-forgot.page.html',
  styleUrls: ['./fire-forgot.page.scss'],
})
export class FireForgotPage implements OnInit {

  public resetPasswordForm: FormGroup;


  
  constructor( 
    public userService: UserService,
    private navController: NavController,
    public menuCtrl: MenuController,
    public router: Router,
    private ionicComponentService: IonicComponentService,
    public  formBuilder: FormBuilder
  ) { 

/* this is as expression to validate email address.*/ 
    let EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  
    this.resetPasswordForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
   
    });
  }

  ngOnInit() {
  }

  resetPassword(){
    if (!this.resetPasswordForm.valid){
        console.log("form is invalid = "+ this.resetPasswordForm.value);
    } else {

      this.ionicComponentService.presentLoading();

//after enter an Enmail this will be happen to check whether the email is registered in database, or not.
      this.userService.resetPassword(this.resetPasswordForm.value.email)
      .then((user) => {
          this.ionicComponentService.dismissLoading();
          this.ionicComponentService.presentAlert("We just sent you a reset link to your email | لقد قمنا بإرسال رسالة على بريدك يمكنك من خلالها إعادة تعيين كلمة المرور");
          this.router.navigateByUrl('/fire-signin');
      }, (error) => {
        this.ionicComponentService.dismissLoading();
        this.ionicComponentService.presentAlert("The entered Email is uncorrect | البريد الإلكتروني الذي قمت بإدخاله غير صحيح");
      });
    }
  }
}
