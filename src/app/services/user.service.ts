import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
// import * as firebase from 'firebase';
// import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
//import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userId: string = "";
  userAuth: boolean = false;
  private userProfile: AngularFirestoreDocument<any>;

  constructor(
    private firestore: AngularFirestore,
    private fireAuth:AngularFireAuth,
    public storage: Storage
  ) { 
    
    
    this.fireAuth.authState.subscribe( user => {
      if(user) {
        console.log("USERSERVICE.....  auth = true");
        this.userId =  user.uid;
        this.userAuth =  true;
        this.storage.set('userId', this.userId);
        this.storage.set('userAuth', true);
      } else {
        // Empty the value when user signs out
        this.userId =  "";
        this.userAuth =  false;
        this.storage.set('userId', this.userId);
        this.storage.set('userAuth', this.userAuth);
      }
    });


   }


//**************************************//
//******   user authentication    ******//
//**************************************//

  isLoggedIn():Promise<any> {
    return this.fireAuth.authState.pipe(first()).toPromise();
  }

  async getAuthState(){
    console.log("userService call getAuthState="+this.userAuth);
    return await this.userAuth;
  }

  getUserId(){
    return this.userId;
  }

  getConnectedUserId():string{
    this.fireAuth.authState.subscribe( (user) => {
      if(user) {
        this.userId =  user.uid;
        this.userAuth =  true;
        this.storage.set('userId', this.userId);
        this.storage.set('userAuth', true);
      } else {
        // Empty the value when user signs out
        this.userId =  null;
        this.userAuth =  false;
        this.storage.set('userId', null);
        this.storage.set('userAuth', false);
      }
    });
    return this.userId;
  }
 
  // login
  signinUser(newEmail: string, newPassword: string): Promise<any> {
    return this.fireAuth.auth.signInWithEmailAndPassword(newEmail,newPassword)
  }
  //reset Password
  resetPassword(email: string):Promise<any> {
    return this.fireAuth.auth.sendPasswordResetEmail(email);
  }
  //signout
  signoutUser(): Promise<any> {
    return this.fireAuth.auth.signOut();
  }

  // register 
  signupUser(firstname: string, lastname: string, username: string, password: string): Promise<any> {
    return this.fireAuth.auth.createUserWithEmailAndPassword(username, password).then((newUser) => {
      console.log("userid========="+newUser.user.uid);
        this.firestore.collection('userProfile').doc(newUser.user.uid).set({
          id: newUser.user.uid,
          firstname: firstname,
          lastname: lastname,
          email: username,
          image:""
          
        })

    });
  }

//*******************************//
//******   user profile    ******//
//*******************************//

  getUserProfile(){
    console.log("userId="+this.userId);
    console.log("getUserProfile");
    return   this.firestore.doc<any>('userProfile/'+this.userId).valueChanges();
  }

  
  async getUserProfileId(){
   const user = await this.isLoggedIn()
    if (user) {
      this.userId = await user.uid;
      //return   this.firestore.doc<any>('userProfile/'+this.userId).valueChanges();
    } else {
      console.log("++++++++No userId"+this.userId)
    }
    console.log("++++++++++getUserProfileId = "+this.userId)
    return this.userId;
  }


  updateUserProfile(
    firstname: string, 
    lastname: string, 
    email: string, 
  ){
    
    return  this.firestore.doc<any>('userProfile/'+this.userId).update({
      firstname: firstname,
      lastname: lastname,
      email: email
    });
  }


}
