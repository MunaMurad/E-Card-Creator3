import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MenuController, NavController } from "@ionic/angular";
import { IonicComponentService } from "../../services/ionic-component.service";
import { UserService } from "../../services/user.service";


@Component({
  selector: "app-fire-signin",
  templateUrl: "./fire-signin.page.html",
  styleUrls: ["./fire-signin.page.scss"],
})
export class FireSigninPage implements OnInit {
  public showPassword: boolean = false;
  redirectUrl: string;
  //****** form validation ******//
  public loginForm: FormGroup;
  public redirectPath: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public menuCtrl: MenuController,
    private userService: UserService,

    private ionicComponentService: IonicComponentService,

    //****** form validation ********//
    public formBuilder: FormBuilder
  ) {
  
    /* this is as expression to validate email address.*/ 
    let EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

 //the required information with the constraints on it.
    this.loginForm = formBuilder.group({
      username:['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
     // username: [ "", Validators.compose([Validators.minLength(3), Validators.required]), ],
      password: ["", Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.redirectUrl = this.activatedRoute.snapshot.queryParamMap.get(
      "redirectUrl"
    );
    console.log("redirectUrl=" + this.redirectUrl);
     }

  submitFormTest() {
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
      console.log("invalid form");
    } else {
      console.log(this.loginForm.value);
      console.log("yes, ");
    }
  }

  register() {
    //this.router.navigateByUrl("/fire-signup?redirectUrl=" + this.redirectUrl);
    this.router.navigateByUrl("/fire-signup");
  }

  forgot() {
   // this.router.navigateByUrl("/fire-forgot?redirectUrl=" + this.redirectUrl);
    this.router.navigateByUrl("/fire-forgot");
  }
  
  login() {
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
      console.log("invalid form");
    } else {
      this.ionicComponentService.presentLoading();
      console.log(this.loginForm.value);
      console.log("yes, ");
      this.userService
        .signinUser(
          this.loginForm.value.username,
          this.loginForm.value.password
        )
        .then(
          (authData) => {
            console.log("Auth pass");
            this.ionicComponentService.dismissLoading();
              this.router.navigateByUrl("/beginning");
          },
          (error) => {
            this.ionicComponentService.dismissLoading();
            this.ionicComponentService.presentAlert(" The Email or Password is incorrect | البريد الإلكتروني أو كلمة المرور غير صحيحة");
          }
        );
    }
  }

  /* Show / hide password */
  public onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }
}
