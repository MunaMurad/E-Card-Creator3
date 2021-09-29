import { Component,Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';

import { firestore } from 'firebase/app' // new version : ex arrayContanin, arrayUnion
import * as firebase from 'firebase';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RealestateService {


  public userId: string = "";
  public userAuth: boolean;

  constructor(
    private firestore: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) {

    this.fireAuth.authState.subscribe(user => {
      if (user) {
        console.log("realestate Service ...  auth = true");
        this.userId = user.uid;
        this.userAuth = true;
      }else{
        console.log("trealestate Service ...  auth = false");
        this.userId = "";
        this.userAuth = false;
      }
    });

  }
//****************************************//
//****** Get by agentId    ******//
//****************************************//
getHouseByAgent(agentId: string) {
  return this.firestore.collection<any>('/realestate_item', ref => ref
  .where('agentId', '==', agentId))
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
//****** Get house items by type    ******//
//****************************************//
getHouseByType(HouseType: string) {
  return this.firestore.collection<any>('/realestate_item', ref => ref
  .where('type', '==', HouseType))
  //.orderBy("timestamp", "desc").limit(10))
  .snapshotChanges().pipe(
    map(actions => {  
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        console.log("-----> getHouseByType="+data);
        return { id, ...data };
      });
    })
  );
}
//****************************************//
//****** Get house  by recommended    ******//
//****************************************//
getHouseByRecom() {
  return this.firestore.collection<any>('/realestate_item', ref => ref
  .where('recommended', '==', true))
  //.orderBy("timestamp", "desc").limit(10))
  .snapshotChanges().pipe(
    map(actions => {  
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        console.log("-----> getHouseByRecom="+data);
        return { id, ...data };
      });
    })
  );
}
//************************//
//******** Get all houses *********//
//************************//

getAllHouse(){
  console.log("start getAllHouse");
  // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
  // return this.postDoc.valueChanges()

  return this.firestore.collection<any>('realestate_item').snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        console.log("####place data="+data);
        console.log("####place Id ="+id);
        return { id, ...data };
      });
    })
  );
}
//******************************//
//****** Get house detail ******//
//******************************//

getHouseDetail(itemId: string){
  console.log("---> call getHouseDetail()");
  return this.firestore.doc<any>('realestate_item/'+itemId).valueChanges();
}
//****************************************//
//****** Get all agents    ******//
//****************************************//
getAgent() {
  return this.firestore.collection<any>('realestate_agent').snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        console.log("####place data="+data);
        console.log("####place Id ="+id);
        return { id, ...data };
      });
    })
  );
}
getTopAgent(limit: number) {
  return this.firestore.collection<any>('realestate_agent', ref => ref
  .where('rating', '>', 4)
  .limit(limit))
  .snapshotChanges().pipe(
    map(actions => {  
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        //console.log("----->getPopularItem="+data);
        return { id, ...data };
      });
    })
  );
}
//******************************//
//****** Get agent detail ******//
//******************************//

getAgentDetail(agentId: string){
  console.log("---> call getAgentDetail()");
  return this.firestore.doc<any>('realestate_agent/'+agentId).valueChanges();
}


//************************//
//****** Favorite ******//
//************************//


addFavorite(
  itemId: string , 
  title: string,
  image: string
){
  console.log("__addFavorite");
  console.log("userId= "+ this.userId);

  //###### Add userId to travel_place > favorite array  #####//
  this.firestore.doc('realestate_item/'+itemId).update(
    {
      favorite: firestore.FieldValue.arrayUnion(this.userId)
    }
  );
  //#### then add placeId to travel_favorite_user collection  ######//
  return this.firestore.doc('realestate_favorite_user/'+itemId).set({
     itemId: itemId,
     userId: this.userId,
     name: title,
     image_header: image
  });
			// this.postReference.update({
			// 	favorite: firestore.FieldValue.arrayUnion(userId)
			// })
}

removeFavorite(
  itemId: string){
    console.log("removeFavorite");
    //####### Remove userId in traval_place > favorite array  ######//
     this.firestore.doc('realestate_item/'+itemId).update(
      {
        favorite: firestore.FieldValue.arrayRemove(this.userId)
      }
    );
    //###### remove placeId from travel_favorite_user collection  #####//
    return this.firestore.doc('realestate_favorite_user/'+itemId).delete();
  }

//*****************************************************//
//******** User's fovorite places by userId  *********//
//*****************************************************//

getFavHouse(){
  console.log("_____START USERID()="+this.userId);
  return this.firestore.collection<any>('/realestate_favorite_user', ref => ref
  .where('userId', '==', this.userId))
  //.orderBy("timestamp", "desc").limit(10))
  .snapshotChanges().pipe(
    map(actions => {  
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        console.log("####get a group of countries="+data);
        return { id, ...data };
      });
    })
  );
}


//************************//
//******** Search Place *********//
//************************//

searchHouses(){
  console.log("start searchPlaces");
  // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
  // return this.postDoc.valueChanges()

  return this.firestore.collection<any>('realestate_item').snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        console.log("####place data="+data);
        console.log("####place Id ="+id);
        return { id, ...data };
      });
    })
  );
}


}
