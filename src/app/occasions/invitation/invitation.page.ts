import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { InvitationDetails } from 'src/app/congratspages/image-editor/InvitationDetails';
import { UserService } from "../../services/user.service";
import { AngularFirestore,AngularFirestoreDocument} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.page.html',
  styleUrls: ['./invitation.page.scss'],
})
export class InvitationPage implements OnInit {

  selectedItem: string = "one";
 
  private invitationsCollection: AngularFirestoreCollection<any>;
  
  userId:any;
  invitations:InvitationDetails[];
  constructor(public userService:UserService,private storage:Storage, private firestore: AngularFirestore) {

    this.invitationsCollection = this.firestore.collection<any>('Invitations');
    this.storage.get('userId').then((val)=>{
      console.log("this.userId = val inside",val)
      this.userId = val;
    });
    console.log('this.storage.get(userId) outside',this.userId);
   }

async getInvitationCounter(){
  
  console.log('start getInvitationCounter');
  var data = await this.invitationsCollection.ref.where('UserId', '==', this.userId).get().then(
    function (querySnapshot){
      querySnapshot.forEach((res)=>
      {
        var result = res.data() as InvitationDetails;
      console.log('start this.invitation.push', result);
      this.invitation.push(res.data() as InvitationDetails);
      })
  });        
  console.log('start invitationArray', this.invitations);
  return this.invitations;
}

  ngOnInit() {
  }

}
