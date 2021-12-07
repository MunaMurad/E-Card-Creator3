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
  
  userId:string;
  invitations:InvitationDetails[];
  constructor(public userService:UserService,private storage:Storage, private firestore: AngularFirestore) {

    this.invitationsCollection = this.firestore.collection<any>('Invitations');
    this.storage.get('userId').then((val)=>{
      this.userId = val;
    });
    console.log('**********start getInvitationCounter in constructor:  ', this.userId);
 }

  ngOnInit() {
    console.log('**********start getInvitationCounter in ngOnInit:  ', this.userId);

    this.getInvitationCounter(this.userId);

  }
async getInvitationCounter(userId){
  
  console.log('**********start getInvitationCounter:  ', userId);
  var data = await this.invitationsCollection.ref.where('UserId', '==', userId).get().then(
    function (querySnapshot){
      querySnapshot.forEach((res)=>
      {
        console.log('raw result ',res);
        var result = res.data() as InvitationDetails;
        console.log('start this.invitation.push', result);
        this.invitations.push(res.data() as InvitationDetails);
      })
      //this.invitations = this.invitaiton
  });        
  console.log('start invitationArray', this.invitations);
  return this.invitations;
}



}
