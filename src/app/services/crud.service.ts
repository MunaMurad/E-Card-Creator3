import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import * as firebase from 'firebase';
// import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { Category} from '../models/category';

// import { Item } from '../models/item';


//Define the Item Class
//It’s generally good practice to define data objects in their own TypeScript class.
export interface Category {
  id?: string; // ? =  variable of Optional 
  name: string;
  description: string; 
  createdDate?: string; 
}
export interface Item {
  id?: string; 
  catId?: string;
  name?: string;
  price?: number;  
  stock?: number;
  imageUrl?: string;
  description?: string; 
}  

@Injectable({
  providedIn: 'root'
})

export class CrudService {



  private categoryCollection: AngularFirestoreCollection<any>;
  private itemCollection: AngularFirestoreCollection<any>;



  private categories: Observable<Category[]>;
  private items: Observable<Item[]>;

  testData: Observable<any>;
  //private itemDoc: AngularFirestoreDocument<any>;

  constructor(private firestore: AngularFirestore){
   this.categoryCollection = this.firestore.collection<Category>('category');
   this.itemCollection = this.firestore.collection<Item>('item');



  }

// &&&&&&&&&&&&&&&&&&&&&&&&&& Create service ex //
//https://medium.com/@jinalshah999/cloud-fire-store-crud-operation-using-angular-f319bef27ce0



//########################//
//###### Categories ######//
//########################//

    getCategories(){
      const createdAt = firebase.firestore.FieldValue.serverTimestamp();
      console.log("start getCategory");
      return this.categoryCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            // get id from firebase metadata 
            const id = a.payload.doc.id; 
            console.log(data);
            return { id, ...data };
          });
        })
      );
    }
    addCategory(data: Category): Promise<any> {
      const createdAt = firebase.firestore.FieldValue.serverTimestamp();
      return this.categoryCollection.add(data);
    }
    updateCategory(id: string, formData): Promise<any> {
      return this.categoryCollection.doc(id).update(formData);

        //return this.getCategory(id).update(formData)
    }
    deleteCategory(id: string) {
      return this.categoryCollection.doc(id).delete();
      // return this.getCategory(id).delete();
    }


//########################//
//######### Items ########//
//########################//



    // Get items list
    getItems(catId: string):Observable<Item[]> {
        console.log('catId='+ catId);

        
        return this.firestore.collection<Item>('/item', ref => ref.where('catId', '==', catId)).snapshotChanges().pipe(
          map(actions => {  
            return actions.map(a => {
              const data = a.payload.doc.data();
              // get id from firebase metadata 
              const id = a.payload.doc.id; 
              console.log(data);
              return { id, ...data };
            });
          })
        );
    }


    // Get item detail
    getItem(itemId: string):Observable<Item> {
      //return this.firestore.doc('item/'+itemId).valueChanges();
      return this.itemCollection.doc<Item>(itemId).valueChanges();
    }

    getItemDetail(itemId: string):Observable<Item> {

      return this.firestore.doc('item/'+itemId).valueChanges();
    
    }



//########################//
//###### Add data to doc ######//
//########################//

addTestData(){
  var docData = {
    stringExample: "NEEDED",
    booleanExample: true,
    numberExample: 3.14159265,
    //dateExample: this.firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),
    tagArray: [{firstName:"ME", lastName:"KUU", age:10},{firstName:"John", lastName:"Doe", age:46}], //[5, true, "hello"],
    nullExample: null,
    objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
    }
    }
    
    this.firestore.collection("item").doc("79oFJZen1UfAoz29pIVL").set(docData).then(function() {
        console.log("Document successfully written!");
    });
 
//************ import data to firestore ********/


    
}









   // read doc xs
   getTestData(){
    //return this.firestore.doc('item/'+itemId).valueChanges();
    console.log("CALLED getTestData()++++++++");
    this.testData =  this.firestore.collection("travel_tag").doc<any>("testid_123456").valueChanges();

  this.testData.subscribe(data => console.log("ZOOOOOOOOOM="+ data.images) )
  }



    addItem(data: Item){
      // const newBillRef: firebase.firestore.DocumentReference = await this.billList.add({});
      return this.itemCollection.add(data);

    }
    updateItem(itemId: string, data: Item){
      return this.itemCollection.doc(itemId).update(data);
    }
    deleteItem(itemId: string) {
      return this.itemCollection.doc(itemId).delete();

      // return this.getCategory(id).delete();
    }

}
