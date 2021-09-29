import { Component, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { NavController, ModalController } from '@ionic/angular';
import { firestore } from 'firebase/app' // new version : ex arrayContanin, arrayUnion
import * as firebase from 'firebase';
// import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})



export class TravelService {

  public userId: string = "";
  public userAuth: boolean;

  constructor(
    private firestore: AngularFirestore,
    private fireAuth: AngularFireAuth,
    private modalController: ModalController,
    //private activatedRoute: ActivatedRoute,
    private navController: NavController,
  ) {

    this.fireAuth.authState.subscribe(user => {
      if (user) {
        console.log("travelSERVICE_______auth = true");
        this.userId = user.uid;
        this.userAuth = true;
      } else {
        console.log("travelSERVICE_______auth = false");
        this.userId = "";
        this.userAuth = false;
      }
    });

  }



  // get timestamp() {
  //   //return firebase.database.ServerValue.TIMESTAMP;
  //   return firebase.firestore.FieldValue.serverTimestamp();
  // }


  //#*********************************//
  //****** Get favorite items   ******//
  //**********************************//
  getFavorite() {
    //  getUserId
    // return this.favoriteCollection.doc<Favorite>(id).valueChanges();
    // return this.firestore.doc(`/userProfile/${this.userId}/travel_place/${placeId}`);
    return this.firestore.collection<any>(`/userProfile/${this.userId}/travel_favorite`).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          // get id from firebase metadata 
          const id = a.payload.doc.id;
          //console.log("...getFavorite="+data);
          return { id, ...data };
        });
      })
    );
  }

  //**************************//
  //****** Add favorite ******//
  //**************************//

  addFavorite(
    placeId: string,
    placeName: string,
    rating: number,
    image: string
  ) {
    console.log("");
    console.log("...addFavorite userId= " + this.userId);

    //###### Add userId to travel_place > favorite array  #####//
    this.firestore.doc('travel_place/' + placeId).update(
      {
        favorite: firestore.FieldValue.arrayUnion(this.userId)
      }
    );
    //#### then add placeId to travel_favorite_user collection  ######//
    return this.firestore.doc('travel_favorite_user/' + placeId).set({
      placeId: placeId,
      userId: this.userId,
      name: placeName,
      rating: rating,
      image_header: image
    });
    // this.postReference.update({
    // 	favorite: firestore.FieldValue.arrayUnion(userId)
    // })
  }
  //*****************************//
  //****** Remove favorite ******//
  //*****************************//

  removeFavorite(placeId: string) {
    console.log("removeFavorite");
    //####### Remove userId in traval_place > favorite array  ######//
    this.firestore.doc('travel_place/' + placeId).update(
      {
        favorite: firestore.FieldValue.arrayRemove(this.userId)
      }
    );
    //###### remove placeId from travel_favorite_user collection  #####//
    return this.firestore.doc('travel_favorite_user/' + placeId).delete();
  }



  //************************//
  //****** Categories ******//
  //************************//

  getCategories() {
    return this.firestore.collection<any>('travel_category').snapshotChanges().pipe(
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

  //*************************************//
  //****** Categories by countries(group) ******//
  //*************************************//

  getCateoriesByGroup() {
    console.log("get countries list by group");
    return this.firestore.collection<any>('travel_category').snapshotChanges().pipe(
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
  //************************//
  //******** Search Place *********//
  //************************//

  searchPlaces() {
    console.log("start searchPlaces");
    // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
    // return this.postDoc.valueChanges()

    return this.firestore.collection<any>('travel_place').snapshotChanges().pipe(
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


  //*****************************************************//
  //******** User's fovorite places by userId  *********//
  //*****************************************************//

  getFavPlace() {
    console.log("..getFavPlace/ get this.userId()=" + this.userId);
    return this.firestore.collection<any>('/travel_favorite_user', ref => ref
      .where('userId', '==', this.userId))
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
  //**************************************//
  //******** Place by categoryId *********//
  //**************************************//

  getPlacesByCatId(categoryId: string) {
    console.log("_____START getPlacesByCatId()=" + categoryId);
    // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
    // return this.postDoc.valueChanges()

    return this.firestore.collection<any>('/travel_place', ref => ref
      .where('travel_categoryId', '==', categoryId))
      //.orderBy("timestamp", "desc").limit(10))
      .snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            // get id from firebase metadata 
            const id = a.payload.doc.id;
            console.log("####get a group of countries=" + data);
            return { id, ...data };
          });
        })
      );
  }

  //************************//
  //******** Place *********//
  //************************//

  getPlaces() {
    return this.firestore.collection<any>('travel_place').snapshotChanges().pipe(
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
  //******************************//
  //****** Place by placeID ******//
  //******************************//

  getPlacesDetail(placeId: string) {
    //console.log("3_____Travel.Service call getPlacesDetail()");
    return this.firestore.doc<any>('travel_place/' + placeId).valueChanges();

  }





  //****************************************//
  //******   Review    ******//
  //****************************************//
  getReviews(placeId: string, limit: number) {
    console.log("###### get review service placeId=" + placeId);
    return this.firestore.collection<any>('/travel_review', ref => ref
      //.orderBy("createdtime", "asc") // You have to create index in firebase console.
      .where('travel_placeId', '==', placeId)
      .limit(limit))
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


  //******************************//
  //******   Add review    ******//
  //*****************************//
  addReview(
    placeId: string,
    userProfileImage: string,
    name: string,
    rating: number,
    comment: string
  ) {
    //console.log("start addReview_______placeId="+placeId);
    //console.log("_____new Date()="+new Date());
    return this.firestore.collection<any>('travel_review').add({
      travel_placeId: placeId,
      userProfileId: this.userId,
      userProfileImage: userProfileImage,
      name: name,
      rating: rating,
      comment: comment,
      createdTime: new Date()
    });

  }

  //****************************************//
  //******   Reviews  by placeId  ******//
  //****************************************//
  // getReviews(placeId: string) {
  //   console.log("###### get review service placeId="+placeId);
  //   return this.firestore.collection<any>('/travel_review', ref => ref
  //   .where('travel_placeId', '==', placeId))
  //   .snapshotChanges().pipe(
  //     map(actions => {  
  //       return actions.map(a => {
  //         const data = a.payload.doc.data();
  //         // get id from firebase metadata 
  //         const id = a.payload.doc.id; 
  //         console.log("####Review ="+data);
  //         return { id, ...data };
  //       });
  //     })
  //   );
  // }

  //****************************************//
  //****** Get Place by recommended   ******//
  //****************************************//
  getRecommended() {

    return this.firestore.collection<any>('/travel_place', ref => ref
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
  //****** Get Place by Top rating   ******//
  //****************************************//
  getTopRatingPlaces() {
    //console.log('catId='+ catId);

    return this.firestore.collection<any>('/travel_place', ref => ref
      .where('rating', '==', 5))
      //.orderBy("timestamp", "desc").limit(10))
      .snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            // get id from firebase metadata 
            const id = a.payload.doc.id;
            //console.log("####Top rating place="+data);
            return { id, ...data };
          });
        })
      );
  }






  //*************************//
  //******  Get tags   ******//
  //************************//

  getTags() {
    console.log("start getTags");
    return this.firestore.collection<any>('travel_tag').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          // get id from firebase metadata 
          const id = a.payload.doc.id;
          //console.log("#####Get getTags"+data);
          //console.log("Get Tags"+data);
          return { id, ...data };
        });
      })
    );
  }


  getPlacesByTag(tagId: string) {
    //console.log(">>>>>>>>>>>start getPlacesByTag");
    return this.firestore.doc<any>('travel_tag/' + tagId).valueChanges();
    // return this.firestore.collection<any>('/travel_tag', ref => ref
    // .where('tagId', '==', tagId))
    // //.orderBy("timestamp", "desc").limit(10))
    // .snapshotChanges().pipe(
    //   map(actions => {  
    //     return actions.map(a => {
    //       const data = a.payload.doc.data();
    //       // get id from firebase metadata 
    //       const id = a.payload.doc.id; 
    //       return { id, ...data };
    //     });
    //   })
    // );
  }


  // getTagged(placeId: string){
  //   return this.firestore.collection<any>(`/userProfile/$placeId}/travel_tagged`).snapshotChanges().pipe(
  //     map(actions => {
  //       return actions.map(a => {
  //         const getData = a.payload.doc.data();
  //         // get id from firebase metadata 
  //         const id = a.payload.doc.id; 
  //         console.log("#####Get Tagged"+getData);
  //         return { id, ...getData };
  //       });
  //     })
  //   );
  // }







}
