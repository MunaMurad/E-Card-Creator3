import { Component,Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';

import { firestore } from 'firebase/app' // new version : ex arrayContanin, arrayUnion
import * as firebase from 'firebase';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RadioService {


  private playingStatus: boolean = false;
  stream:any;
  promise:any;


  public userId: string;
  public userAuth: boolean;

 
  
  constructor(
    private firestore: AngularFirestore,
    private fireAuth: AngularFireAuth,
  
  ) { }








//**********************************//
//****** Get radio station list ******//
//**********************************//

getStations(){
  console.log("start getCategory");
  return this.firestore.collection<any>('/layout_radio').snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        return { id, ...data };
      });
    })
  );

}

//****************************************//
//****** Get recommended station  ******//
//****************************************//
getRecommendedStations() {

  return this.firestore.collection<any>('/layout_radio', ref => ref
  .where('recommended', '==', true))
  //.orderBy("timestamp", "desc").limit(10))
  .snapshotChanges().pipe(
    map(actions => {  
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        return { id, ...data };
      });
    })
  );
}
//****************************************//
//****** Get by type ******//
//****************************************//
getStationByType(stationType) {

  return this.firestore.collection<any>('/layout_radio', ref => ref
  .where('type', '==', stationType))
  //.orderBy("timestamp", "desc").limit(10))
  .snapshotChanges().pipe(
    map(actions => {  
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        return { id, ...data };
      });
    })
  );
}

//**********************************//
//****** Radio station detail ******//
//**********************************//

getStationDetail(radioId: string){
  console.log("---> call getStationDetail()");
  return this.firestore.doc<any>('layout_radio/'+radioId).valueChanges();

}

//*****************************************************//
//******** Get favorite stations  *********//
//*****************************************************//

getFavStations(){
  console.log("_____START USERID()="+this.userId);
  // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
  // return this.postDoc.valueChanges()

  return this.firestore.collection<any>('/layout_radio_favorite_user', ref => ref
  .where('userId', '==', this.userId))
  //.orderBy("timestamp", "desc").limit(10))
  .snapshotChanges().pipe(
    map(actions => {  
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id; 
        return { id, ...data };
      });
    })
  );
}

//*********************************//
//******* Add to favorite  ********//
//*********************************//
addFavStation(
  radioId: string , 
  itemName: string, 
  rating: number, 
  image: string
){
  console.log("addFavStation");
  console.log("userId= "+ this.userId);

  //###### Add userId to layout_radio > favorite array  #####//
  this.firestore.doc('layout_radio/'+radioId).update(
    {
      favorite: firestore.FieldValue.arrayUnion(this.userId)
    }
  );

  //#### then add radioId to radio_favorite_user collection  ######//
  return this.firestore.doc('layout_radio_favorite_user/'+radioId).set({
     radioId: radioId,
     userId: this.userId,
     name: itemName,
     rating: rating,
     image: image
  });
			// this.postReference.update({
			// 	favorite: firestore.FieldValue.arrayUnion(userId)
			// })
}
//*************************************//
//****** Remove from favorite  ********//
//*************************************//

removeFavStation(radioId: string){
  console.log("removeFavStation");
  //####### Remove userId in layout_radio > favorite array  ######//
   this.firestore.doc('layout_radio/'+radioId).update(
    {
      favorite: firestore.FieldValue.arrayRemove(this.userId)
    }
  );
  //###### remove placeId from travel_favorite_user collection  #####//
  return this.firestore.doc('layout_radio_favorite_user/'+radioId).delete();
}



//******************************//
//****** Get playing status ******//
//******************************//

 getPlayingStatus() {
   return this.playingStatus;
 }



 play(url) {
  this.stream = new Audio(url);
  this.stream.play();
  this.stream.volume = 0.5;
  console.log("SHOW VOL = "+this.stream.volume);

  this.promise = new Promise((resolve,reject) => {
      this.stream.addEventListener('playing', () => {
        console.log("Radio service is play");
        this.playingStatus = true;
        resolve(true);
      });

      this.stream.addEventListener('error', () => {
        this.playingStatus = false;
        reject(false);
      });
    });
  return this.promise;
};


pause() {
  console.log("Radio service is pause");
  this.stream.pause(); 
  this.playingStatus = false;
};
stop() {
  console.log("Radio service is STOP");
  this.stream.pause(); 
  this.playingStatus = false;
  // This stops the stream from downloading
  var temp = this; setTimeout(function () { 
    console.log("Stop download");
    temp.stream.src = "about:blank"; 
    temp.stream.load(); 
  })

};


}
