import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ModalController,NavController} from '@ionic/angular';

import { TravelImageViewPage } from '../travel-image-view/travel-image-view.page';
import { UserService } from '../../../services/user.service';
import { TravelService } from '../../../services/travel.service';
import { Observable } from 'rxjs';

// import travel-map  for page modal
// import { TravelMapModalPage } from '../travel-map-modal/travel-map-modal.page';
// import travel-place-review-add  for page modal
// import { TravelPlaceReviewAddPage } from '../../travel-place-review-add/travel-place-review-add.page';


@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.page.html',
  styleUrls: ['./travel-detail.page.scss'],
})
export class TravelDetailPage implements OnInit {

  //**** toolbar for hide and show ****/
  showToolbar = false;
  showColor = false;
  showTitle = false;
  transition:boolean = false;
    

  place: Observable<any>;
  reviews: Observable<any[]>;
  //relatedPlaces:Observable<any[]>;
  //relatedPlacesArray: any=[];
  placeId: any;
  categoryId: any;
  placeArray: any=[];


  //**** User authentication  ****/
  userAuth: boolean = false; // Is user logged in ?
  userId: any;


  //**** favorite  ****/
  favorite: boolean = false;
  //favArray: any=[];
	heartType: string = "heart-empty";

  constructor(
     // private fireAuth:AngularFireAuth,
      public travelService: TravelService,
      public userService: UserService,
      private activatedRoute: ActivatedRoute,
      private navController: NavController,
      public router: Router,
      private modalController: ModalController
  ) 
  { 
    this.placeId = this.activatedRoute.snapshot.paramMap.get('placeId');
  }
      

  async ngOnInit() {
    await this.getPlaceDetail();
    await this.getPlaceReview();
  }


  ngOnDestroy() {
		//this.sub.unsubscribe()
  }

  async getPlaceDetail(){
    //console.log("___userAuth before receive="+this.userAuth);
    //this.userAuth = await this.userService.getAuthState();
    this.userAuth =  await this.userService.isLoggedIn();
    //console.log("___userAuth after received="+this.userAuth);
    this.userId = await this.userService.getUserId();
    //console.log("___userId after receive="+this.userId);

    this.place =  await this.travelService.getPlacesDetail( this.placeId);
    // get image gallery from place doc.
    await this.place.subscribe(res => {

      // console.log("4 getPlacesDetail subsribe = "+res);
      // console.log("5 getPlacesDetail subsribe = "+JSON.stringify(res)); 

      this.placeArray = res;

      // console.log("6 this.placeArray/images="+this.placeArray.images);
      // console.log("7 this.placeArray.travel_categoryId="+this.placeArray.travel_categoryId);
      //this.getRelatedPlace(this.placeArray.travel_categoryId);

      //********* travel-place/favorite/userId  ***********//
      this.heartType = res.favorite.includes(this.userId) ? 'heart' : 'heart-empty'

    });


  }

	toggleHeart() {
		if(this.heartType == 'heart-empty') {
      console.log("Heart ON");

      this.travelService.addFavorite(
        this.placeId,
        this.placeArray.name, 
        this.placeArray.rating, 
        this.placeArray.image_header);
			// this.postReference.update({
			// 	likes: firestore.FieldValue.arrayUnion(this.user.getUID())
			// })
		} else {
      console.log("Heart OFF");
      this.travelService.removeFavorite(this.placeId);
			// this.postReference.update({
			// 	likes: firestore.FieldValue.arrayRemove(this.user.getUID())
			// })
		}
	}

  getPlaceReview(){
    console.log("###########call  getReview()");
    this.reviews = this.travelService.getReviews(this.placeId,5);
  }


  onScroll($event: CustomEvent) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.transition = true;
      this.showToolbar = scrollTop >= 160;
      //console.log("showToolbar="+this.showToolbar);
      this.showTitle = scrollTop >= 160;
      //console.log("showTitle="+this.showTitle);
    }else{
      this.transition = false;
    }
  }


  openImageViewer(image) {
    this.modalController.create({
      component: TravelImageViewPage,
      cssClass: 'fullscreen-modal',
      componentProps: {
        data: this.placeArray,
        index: image
      }
    }).then(modal => {
      modal.present();
    });
  }

  // async openAddReview() {
  //   const modal = await this.modalController.create({
  //     component: TravelPlaceReviewAddPage,
  //     cssClass: 'from-middle-modal',
  //     componentProps: {
  //       placeId:this.placeId
  //     }
  //   });
  //   return await modal.present();
  // }


  // getRelatedPlace(categoryId:string){ // categoryId
  //   // use async pipe //
  //   console.log("###########call  related Places()");
   
  //   //this.relatedPlaces = this.travelService.getPlacesByCatId(categoryId);
  //   this.travelService.getPlacesByCatId(categoryId).subscribe(res => {
  //     console.log(res);
  //     this.relatedPlacesArray = res
  //   });
  // }
}

