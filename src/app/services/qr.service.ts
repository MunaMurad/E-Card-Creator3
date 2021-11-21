import { Observable } from 'rxjs';
import { EncryptionService } from './encryption.service';
import { InvitationDetails } from '../congratspages/image-editor/InvitationDetails';
import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './user.service';

@Injectable({
  providedIn: "root",
})

export class QrService {
    qrData:any;
    createCode: any;
    private invitationsCollection: AngularFirestoreCollection<any>;
    private itemCollection: AngularFirestoreCollection<any>;
    userId:any;
  
  
    private invitationDetails: Observable<InvitationDetails[]>;

    constructor(private firestore: AngularFirestore,
    public navCtrl: NavController,
    public userService:UserService, 
    private encryptionService: EncryptionService,
    private fireAuth:AngularFireAuth) { 

        this.userId = userService.getUserId();
        this.invitationsCollection = this.firestore.collection<any>('Invitations');

    }

    //*******************************//
   //****** Get all places *********//
  //*******************************//
  // Get Latest DocId from DB and insert the rest of the details
    async InsertInvitationQRCodeInDb(data:InvitationDetails){
        data.UserId = this.userId !='' ? this.userId :'a';
        var invitation = new  InvitationDetails();
        invitation.EventName = data.EventName;
        invitation.UserId = data.UserId;
        invitation.AttendeesAllowed= data.AttendeesAllowed;
        invitation.AttendeesCount = 0;
        

        const createdAt = firebase.firestore.FieldValue.serverTimestamp();
        var result : any; 
        await this.invitationsCollection
        .add({
            EventName : data.EventName,
            UserId : data.UserId,
            AttendeesAllowed: data.AttendeesAllowed,
            AttendeesCount : 0
        })
        .then(function(docRef) {
            result = docRef.id;
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

        return await this.encryptionService.Encrypt(result);

        //return result;
    }

    Clear(EncryptedDetails: string){
        this.createCode = this.qrData;
    }
    // Get Latest DocId from DB and insert the rest of the details
    async UpdateInvitationQRCodeInDb(data:InvitationDetails){
        var dbObj = this.invitationsCollection.doc(data.id);
        var result;
        dbObj.update({
            EventName : data.EventName,
            AttendeesAllowed: data.AttendeesAllowed,
        })   
        .then(function(docRef) {
            result = docRef;
        }).catch(function(error) {
            console.error("Error adding document: ", error);
        });

        return result;
    }
    // Get Latest DocId from DB and insert the rest of the details
    async getInvitationQRCode(docId: string){
        var invitation = new InvitationDetails()
        var data = await this.invitationsCollection.doc(docId).ref.get().then(
            function (querySnapshot){
            invitation = querySnapshot.data() as InvitationDetails;
            invitation.id = docId;
        });        
        // data.subscribe(res=>{
        //     invitation = res.
        // });
        return invitation;
    }
    
    deleteInvitaion(docId: string): Promise<void> {
        return this.invitationsCollection.doc(docId).delete();
    }

    // getCategories(){
    //     const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    //     console.log("start getCategory");
    //     return this.categoryCollection.snapshotChanges().pipe(
    //       map(actions => {
    //         return actions.map(a => {
    //           const data = a.payload.doc.data();
    //           // get id from firebase metadata 
    //           const id = a.payload.doc.id; 
    //           console.log(data);
    //           return { id, ...data };
    //         });
    //       })
    //     );
    //   }
    //   addCategory(data: Category): Promise<any> {
    //     const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    //     return this.categoryCollection.add(data);
    //   }
    //   updateCategory(id: string, formData): Promise<any> {
    //     return this.categoryCollection.doc(id).update(formData);
  
    //       //return this.getCategory(id).update(formData)
    //   }
    //   deleteCategory(id: string) {
    //     return this.categoryCollection.doc(id).delete();
    //     // return this.getCategory(id).delete();
    //   }
  

    // getBase64Image(img) {
    //     var canvas = document.createElement("canvas");
    //     canvas.width = img.width;
    //     canvas.height = img.height;
    //     var ctx = canvas.getContext("2d");
    //     ctx.drawImage(img, 0, 0);
    //     var dataURL = canvas.toDataURL("image/png");
    //     return dataURL;
    // }
    
    //   download() {
    //     const qrcode = document.getElementById('qrcode');
    //     let doc = new jsPDF();
    
    //     let imageData= this.getBase64Image(qrcode.firstChild.firstChild);
    //     doc.addImage(imageData, "JPG", 10, 10);
    
    //     doc.save('FirstPdf.pdf');
    //   }
}
