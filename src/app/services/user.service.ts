import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
// import * as firebase from 'firebase';
// import { Observable } from 'rxjs';
import { first,map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userId: string = "";
  userAuth: boolean = false;
  private userProfile: AngularFirestoreDocument<any>;

  constructor(
    private firestore: AngularFirestore,
    private fireAuth:AngularFireAuth
  ) { 
    this.fireAuth.authState.subscribe( user => {
      if(user) {
        console.log("USERSERVICE.....  auth = true");
        this.userId =  user.uid;
        this.userAuth =  true;
        console.log("userId="+this.userId);
      } else {
        console.log("USERSERVICE.....  auth = false");
        // Empty the value when user signs out
        this.userId =  "";
        this.userAuth =  false;
        console.log("userId="+this.userId);
      }
    });


   }


//**************************************//
//******   user authentication    ******//
//**************************************//

///https://angularfirebase.com/snippets/check-if-current-user-exists-with-angularfire/
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
  getConnectedUserId(){
    this.fireAuth.authState.subscribe( user => {
      if(user) {
        console.log("USERSERVICE RUNNNNN...  auth 1");
        this.userId =  user.uid;
        this.userAuth =  true;
        console.log("userService call getUserId="+this.userId);
        return this.userId;
      } else {
        console.log("USERSERVICE RUNNNNN...  auth 0");
        // Empty the value when user signs out
        this.userId =  null;
        this.userAuth =  false;
        console.log("userService call getUserId="+this.userId);
        return this.userId;
      }
    });
  
  }
  // async doSomething(): Promise<string>  {
  //   const user = await this.isLoggedIn()
  //   if (user) {
  //     // do something
  //     this.userId = await user.uid;
  //     return   this.firestore.doc<any>('userProfile/'+this.userId).valueChanges();
  //   } else {
  //     // do something else
  //   }
  // }
 
  // login
  signinUser(newEmail: string, newPassword: string): Promise<any> {
    return this.fireAuth.auth.signInWithEmailAndPassword(newEmail,newPassword)
  }

  resetPassword(email: string):Promise<any> {
    return this.fireAuth.auth.sendPasswordResetEmail(email);
  }

  signoutUser(): Promise<any> {
    return this.fireAuth.auth.signOut();
  }

  // register 
  signupUser(firstname: string, lastname: string, phone: string, username: string, password: string): Promise<any> {
    return this.fireAuth.auth.createUserWithEmailAndPassword(username, password).then((newUser) => {
      console.log("userid========="+newUser.user.uid);   // firebase.database().ref('/userProfile').child(newUser.uid).set({
        this.firestore.collection('userProfile').doc(newUser.user.uid).set({
          id: newUser.user.uid,
          firstname: firstname,
          lastname: lastname,
          email: username,
          image:"",
          phone:phone
        })

    });
  }

//*******************************//
//******   user profile    ******//
//*******************************//

  getUserProfile(){
  //  this.fireAuth.authState.subscribe(user => {
  //   if (user) {
  //     //this.userId = user.uid;
  //     //console.log("CALL check user auth________________userService user auth id = "+ this.userId);
  //     // set angularfireDoc userfile
  //    // this.userProfile = this.firestore.doc<any>('userProfile/'+this.userId);
  //       //######
  //   }
  // });
    console.log("userId="+this.userId);
    console.log("getUserProfile");
    return   this.firestore.doc<any>('userProfile/'+this.userId).valueChanges();
  }

  
  async getUserProfileId(){
   const user = await this.isLoggedIn()
    if (user) {
      // do something
      this.userId = await user.uid;
      //return   this.firestore.doc<any>('userProfile/'+this.userId).valueChanges();
    } else {
      // do something else
      console.log("++++++++No userId"+this.userId)
    }
    console.log("++++++++++getUserProfileId = "+this.userId)
    return this.userId;
  }


  updateUserProfile(
    firstname: string, 
    lastname: string, 
    phone: string, 
    email: string, 
  ){
    
    return  this.firestore.doc<any>('userProfile/'+this.userId).update({
      firstname: firstname,
      lastname: lastname,
      phone:phone,
      email: email
    });
  }


//*******************************//
//******   user address    ******//
//*******************************//

getAddressByUserId(){
  console.log("_____getAddressByUserId=");
  return this.firestore.collection<any>('/userAddress', ref => ref
  .where('userProfileId', '==', this.userId))
  .snapshotChanges().pipe(
    map(actions => {  
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id; 
        console.log("####get a group of countries="+data);
        return { id, ...data };
      });
    })
  );
}

getAddressById( addressId: string){
  console.log("_______getAddressById")
  return   this.firestore.doc<any>('userAddress/'+addressId).valueChanges();
}

addAddress(
  label: string,
  fullname: string,
  phone: number, 
  address: string
) {
  console.log("___addAddress=");
  return  this.firestore.collection<any>('userAddress').add({
      userProfileId: this.userId,
      label: label,
      fullname: fullname,
      phone: phone,
      address: address
      //createdTime: new Date()
  });
}

editAddress(
  addressId: string,    
  title: string,
  fullname: string,
  phone: number, 
  address: string){
    console.log("addressId="+addressId)
    return  this.firestore.doc<any>('userAddress/'+addressId).update({
      label: title,
      fullname: fullname,
      phone: phone,
      address: address
    });
}

deleteAddress(addressId: string){
  return this.firestore.doc('userAddress/'+addressId).delete();
}


}
