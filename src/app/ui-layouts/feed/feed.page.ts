import { Component, OnInit } from '@angular/core';

import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { MenuController} from '@ionic/angular';
import { firestore } from 'firebase/app' // new version : ex arrayContanin, arrayUnion
import * as firebase from 'firebase';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public feeds: Observable<any[]>;
  constructor(
    private firestore: AngularFirestore,
    public menuCtrl: MenuController,
  ) {

  }


  toggleSideMenu() {
    console.log("call toggleSideMenu ")
    this.menuCtrl.toggle(); //Add this method to your button click function
  }
  ngOnInit() {
    console.log("start")
    this.feeds = this.firestore.collection<any>('layout_feed').valueChanges();
  }
  getFeed(){
    console.log("start getCategory");
     
  
  }
}
