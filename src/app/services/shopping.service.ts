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
export class ShoppingService {


  public userId: string = "";
  public userAuth: boolean;

  //********* shopping cart array ************* */
  private shoppingCart = [];

  constructor(
    private firestore: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) {

    this.fireAuth.authState.subscribe(user => {
      if (user) {
        console.log("shoppingService ...  auth = true");
        this.userId = user.uid;
        this.userAuth = true;
      }else{
        console.log("shoppingService ...  auth = false");
        this.userId = "";
        this.userAuth = false;
      }
    });

  }



//*****************************************************//
//******** User's wishlist item by userId  *********//
//*****************************************************//

getWishlist(){
  console.log("_____START USERID()="+this.userId);
  // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
  // return this.postDoc.valueChanges()

  return this.firestore.collection<any>('/shopping_favorite_user', ref => ref
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

addWishlist(
  itemId: string , 
  itemName: string, 
  rating: number, 
  image: string
){
  console.log("addWishlist");
  console.log("userId= "+ this.userId);

  //###### Add userId to shopping_item > favorite array  #####//
  this.firestore.doc('shopping_item/'+itemId).update(
    {
      favorite: firestore.FieldValue.arrayUnion(this.userId)
    }
  );
  //#### then add placeId to travel_favorite_user collection  ######//
  return this.firestore.doc('shopping_favorite_user/'+itemId).set({
     placeId: itemId,
     userId: this.userId,
     name: itemName,
     rating: rating,
     image: image
  });
			// this.postReference.update({
			// 	favorite: firestore.FieldValue.arrayUnion(userId)
			// })
}


removeWishlist(
placeId: string){
  console.log("removeWishlist");
  //####### Remove userId in traval_place > favorite array  ######//
   this.firestore.doc('shopping_item/'+placeId).update(
    {
      favorite: firestore.FieldValue.arrayRemove(this.userId)
    }
  );
  //###### remove placeId from travel_favorite_user collection  #####//
  return this.firestore.doc('shopping_favorite_user/'+placeId).delete();
}





//*******************************//
//******** Search Item *********//
//******************************//

searchItem(){
  console.log("called searchItem");
  // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
  // return this.postDoc.valueChanges()

  return this.firestore.collection<any>('shopping_item').snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        console.log("####item data="+data);
        console.log("####item Id ="+id);
        return { id, ...data };
      });
    })
  );
}

//************************//
//****** Categories ******//
//************************//

getCategories(){
  console.log("start getCategory");
  return this.firestore.collection<any>('shopping_category').snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        console.log("####categories data="+data);
        console.log("####categories Id ="+id);
        return { id, ...data };
      });
    })
  );

}
//*********************************************************//
//****** Banner******//
//*********************************************************//

getBanners(){
  return this.firestore.collection<any>('shopping_banner').snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        console.log("####categories data="+data);
        console.log("####categories Id ="+id);
        return { id, ...data };
      });
    })
  );

}

//******************************//
//****** Banner detail    ******//
//******************************//

getSpecialDetail(specialId: string){
  console.log("---> call getSpecialDetail()");
  return this.firestore.doc<any>('shopping_banner/'+specialId).valueChanges();
}

//*********************************************************//
//****** Group (For brand , special promotion etc) ******//
//*********************************************************//

getGroups(){
  console.log("start getGroup");
  return this.firestore.collection<any>('shopping_group').snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        console.log("####categories data="+data);
        console.log("####categories Id ="+id);
        return { id, ...data };
      });
    })
  );

}

//******************************//
//****** Menu item by Id  ******//
//******************************//

getGroupDetail(groupId: string){
  console.log("---> call getGroupDetail()");
  return this.firestore.doc<any>('shopping_group/'+groupId).valueChanges();

}
//*****************************//
//****** Item by groupId ******//
//*****************************//

getItemByGroupId(groupId: string) {
  //console.log('catId='+ catId);
  console.log("_____START getPopularItems groupId="+groupId);
  return this.firestore.collection<any>('/shopping_item', ref => ref
  .where('shopping_groupId', '>=', groupId))
  //.orderBy("timestamp", "desc").limit(10))
  .snapshotChanges().pipe(
    map(actions => {  
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        console.log("----->getPopularItem="+data);
        return { id, ...data };
      });
    })
  );
}

//****************************************//
//****** Get promotion item  ******//
//****************************************//
getPromotionItems() {

  return this.firestore.collection<any>('/shopping_item', ref => ref
  .where('promotion', '==', true))
  //.orderBy("timestamp", "desc").limit(10))
  .snapshotChanges().pipe(
    map(actions => {  
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        console.log("-----> getRecommended="+data);
        return { id, ...data };
      });
    })
  );
}

//****************************************//
//****** Get recommended item  ******//
//****************************************//
getRecommendedItem() {

  return this.firestore.collection<any>('/shopping_item', ref => ref
  .where('recommended', '==', true))
  //.orderBy("timestamp", "desc").limit(10))
  .snapshotChanges().pipe(
    map(actions => {  
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        console.log("-----> getRecommended="+data);
        return { id, ...data };
      });
    })
  );
}

//*************************************//
//******** Item by categoryId *********//
//*************************************//

getItemByCatId(categoryId: string){
  console.log("_____START getItemByCatId()="+categoryId);
  // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
  // return this.postDoc.valueChanges()

  return this.firestore.collection<any>('/shopping_item', ref => ref
  .where('shopping_categoryId', '==', categoryId))
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

//*************************************//
//******** Item by categoryId *********//
//*************************************//

getRelatedItem(categoryId: string, limit: number){
  console.log("_____START getItemByCatId()="+categoryId);
  // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
  // return this.postDoc.valueChanges()

  return this.firestore.collection<any>('/shopping_item', ref => ref
  .where('shopping_categoryId', '==', categoryId)
  .orderBy("name", "desc").limit(limit))
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


//********************************************//
//******** Get Item detail by itemId *********//
//********************************************//

getItem(){
  console.log("start getPlaces");
  // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
  // return this.postDoc.valueChanges()

  return this.firestore.collection<any>('shopping_item').snapshotChanges().pipe(
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
//****** Menu item by Id  ******//
//******************************//

getItemById(itemId: string){
  console.log("---> call getShoppingItemById()");
  return this.firestore.doc<any>('shopping_item/'+itemId).valueChanges();

}



//******************************//
//****** Menu item by Id  ******//
//******************************//

getProducts() {
  // return this.data;
 }

//*******************************//
//****** Generate order Id ******//
//*******************************//
createOrderId(){
  return  Math.floor(100000 + Math.random() * 900000);
}

//**************************************//
//****** Cart for shopping items ******//
//**************************************//


 getCart() {
   return this.shoppingCart;
 }


//******************************//
//****** Menu item by Id  ******//
//******************************//

getMyOrders(){
 console.log("getMyOrders");
 return this.firestore.collection<any>('/shopping_order', ref => ref
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
getOrderDetail(orderId: string){
  console.log("getOrderDetail orderId="+orderId)
  return this.firestore.doc<any>('shopping_order/'+orderId).valueChanges();
}

//***********************//
//****** Place order ******//
//**********************//

placeOrder(
  addressId: string, 
  paymentType: string, 
  orderItems: any , 
  totalPrice: number 
) {
  console.log("______orderItems()"+JSON.stringify(orderItems));
  console.log("createOrderId()="+this.createOrderId());

 return  this.firestore.collection<any>('shopping_order').add({
     userProfileId: this.userId,
     addressId: addressId,
     orderId: this.createOrderId(),
     paymentType: paymentType,
     orderItems: JSON.stringify(orderItems),
     status: "pending",
     totalPrice: totalPrice,
     createdTime: new Date()
 });
}




//*************************************//
//*** Test: Add/set array of object ***//
//************************************//
testAddArrayObject(){
  //console.log("BEFORE PUSH___________FOODSERVICE addProduct()="+JSON.stringify());
  var docData = {
    stringExample: "NEEDED",
    booleanExample: true,
    numberExample: 3.14159265,
    //dateExample: this.firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),
    tagArray: [{"firstName":"ME", "lastName":"KUU", "age":10, "addOn": [{"isChecked": true,"name": "chilli"}],},{"firstName":"John", "lastName":"Doe", "age":46}], //[5, true, "hello"],
    nullExample: null,
    objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
    }
    }
    this.firestore.collection("food_order").doc("79oFJZen1UfAoz29pIVL").set(docData).then(function() {
        console.log("Order successfully written!");
    });
}



//*******************//
//****** Cart  ******//
//*******************//

 

 addToCart(product) {
   console.log("BEFORE PUSH___________FOODSERVICE addProduct()="+JSON.stringify(product));
   // const postData = {
   //   catId:1111111,
   //   name: "TEST",
   //   price: 210,

   //   array: this.selectOptions,
   //   image: '/assets/images/salami.jpg'
   //   //image: this.image
   //   }
   this.shoppingCart.push(product);

   console.log("+AFTER PUSH _________________FOODSERVICE 3cart array="+JSON.stringify(this.shoppingCart));
 }

 removeItemCart(index){
   console.log("removeItemCart")
   this.shoppingCart.splice(index, 1); 
   //update total price//

 }
 removeAllItemCart(){
  console.log("removeAllItemCart")
  this.shoppingCart.length = 0;
  //update total price//

}

//****************************************//
//******   Review    ******//
//****************************************//
getReviews(itemId: string,limit: number) {

  console.log("###### get review service itemId="+itemId);
  return this.firestore.collection<any>('/shopping_review', ref => ref
  //.orderBy("createdtime", "asc") // You have to create index in firebase console.
  .where('shopping_itemId', '==', itemId)
  .limit(limit))
  .snapshotChanges().pipe(
    map(actions => {  
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        console.log("####Review ="+data);
        return { id, ...data };
      });
      
    })
  );
}


//******************************//
//******   Add review    ******//
//*****************************//
addReview(
  itemId: string,
  userProfileImage:string,
  name: string,
  rating: number, 
  comment: string
) {
  console.log("___itemId="+itemId);
  console.log("_____new Date()="+new Date());
  return  this.firestore.collection<any>('shopping_review').add({
      shopping_itemId: itemId,
      userProfileId: this.userId,
      userProfileImage:userProfileImage,
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
  //console.log('catId='+ catId);
  
  return this.firestore.collection<any>('/shopping_item', ref => ref
  .where('recommended', '==', true))
  //.orderBy("timestamp", "desc").limit(10))
  .snapshotChanges().pipe(
    map(actions => {  
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata 
        const id = a.payload.doc.id; 
        console.log("####Reccomened="+data);
        return { id, ...data };
      });
    })
  );
}




}
