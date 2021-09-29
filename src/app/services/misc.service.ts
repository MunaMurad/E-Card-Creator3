import { Component, Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MiscService {
  constructor(private firestore: AngularFirestore) {}

  //*******************************//
  //****** Get all places *********//
  //*******************************//

  getAllPlaces() {
    console.log("start getAllHouse");
    // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
    // return this.postDoc.valueChanges()

    return this.firestore
      .collection<any>("layout_map")
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            // get id from firebase metadata
            const id = a.payload.doc.id;
            console.log("####place data=" + data);
            console.log("####place Id =" + id);
            return { id, ...data };
          });
        })
      );
  }
  //******************************//
  //****** Get place detail ******//
  //******************************//

  getPlaceById(itemId: string) {
    console.log("---> call getPlaceById()");
    return this.firestore.doc<any>("layout_map/" + itemId).valueChanges();
  }
}
