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
export class FoodService {


  public userId: string = "";
  public userAuth: boolean;

  //********* shopping cart array ************* */
  private foodCart = [];

  constructor(
    private firestore: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) {

    this.fireAuth.authState.subscribe(user => {
      if (user) {
        console.log("foodService_______auth 1");
        this.userId = user.uid;
        this.userAuth = true;
      }else{
        console.log("foodService_______auth 0");
        this.userId = "";
        this.userAuth = false;
      }
    });

  }



//*******************************//
//******** Search Item *********//
//******************************//

searchItem(){
  console.log("called searchItem");
  // this.itemDoc = this.firestore.doc<any>(`food_item/${categoryId}`)
  // return this.itemDoc.valueChanges()
  return this.firestore.collection<any>('food_item').snapshotChanges().pipe(
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
//****** Categories ******//
//************************//

getCategories(){
  console.log("start getCategory");
  return this.firestore.collection<any>('food_category').snapshotChanges().pipe(
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
//****** Get popular item   ******//
//****************************************//
getPopularItems() {
  return this.firestore.collection<any>('/food_item', ref => ref
  .where('rating', '>=', 4))
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

getItemByCatId(categoryId: string){
  return this.firestore.collection<any>('/food_item', ref => ref
  .where('food_categoryId', '==', categoryId))
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
//****** Get promotion item  ******//
//****************************************//
getPromotionItems() {
  return this.firestore.collection<any>('/food_item', ref => ref
  .where('promotion', '==', true))
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


//************************//
//******** Place *********//
//************************//

// getPlaces(){
//   return this.firestore.collection<any>('travel_place').snapshotChanges().pipe(
//     map(actions => {
//       return actions.map(a => {
//         const data = a.payload.doc.data();
//         // get id from firebase metadata 
//         const id = a.payload.doc.id; 
//         return { id, ...data };
//       });
//     })
//   );
// }
//******************************//
//****** Get item detail  ******//
//******************************//

getItemDetail(itemId: string){
  return this.firestore.doc<any>('food_item/'+itemId).valueChanges();

}

getProducts() {
  // return this.data;
}
//******************************//
//****** Get item in cart  ******//
//******************************//
getCart() {
  return this.foodCart;
}


//*******************************//
//****** Generate order Id ******//
//*******************************//
createOrderId(){
  return  Math.floor(100000 + Math.random() * 900000);
}

//***********************//
//****** Get order ******//
//**********************//
getMyOrders(){
  console.log("getMyOrders");
  console.log("getMyOrders userProfileId="+this.userId);
  return this.firestore.collection<any>('/food_order', ref => ref
  .where('userProfileId', '==', this.userId))
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
getOrderDetail(orderId: string){
  return this.firestore.doc<any>('food_order/'+orderId).valueChanges();
}


//***********************//
//****** Place order ******//
//**********************//

placeOrder(
  addressId: string, 
  paymentType: string, 
  orderItems: any, 
  totalPrice: number 
) {
  console.log("______orderItems()"+JSON.stringify(orderItems));
  console.log("createOrderId()="+this.createOrderId());
  //const itemCartJson = JSON.stringify(orderItems);
  //const itenCartParse  = JSON.parse(itemCart); JSON.parse(localStorage.getItem('avct_item')) || [];
  //const itenCartParse  = itemCart.replace(/\"([^(\")"]+)\":/g,"$1:");
 //console.log("_____itenCartParse="+itenCartParse);
  // https://stackoverflow.com/questions/48156234/function-documentreference-set-called-with-invalid-data-unsupported-field-val
  // const convertArray = itemCart.map((obj)=> {return Object.assign({}, obj)});
  // console.log("convertArray="+JSON.stringify(convertArray));
  //const testArray =  [{firstName:"ME", lastName:"KUU", age:10},{firstName:"John", lastName:"Doe", age:46}];
  const testArray = [{"1111firstName":"ME", "lastName":"KUU", "age":10, "addOn": [{"isChecked": true,"name": "chilli"},{"isChecked": true,"name": "chilli"}],},{"firstName":"John", "lastName":"Doe", "age":46}] //[5, true, "hello"],
  console.log('____testArray='+JSON.stringify(testArray));
  return  this.firestore.collection<any>('food_order').add({
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
    this.foodCart.push(product);
    console.log("+AFTER PUSH _________________FOODSERVICE 3cart array="+JSON.stringify(this.foodCart));
  }
  removeItemCart(index){
    console.log("removeItemCart")
    this.foodCart.splice(index, 1); 
    //update total price//

  }
  removeAllItemCart(){
    console.log("removeAllItemCart")
    this.foodCart.length = 0;
    //update total price//
  
  }



}