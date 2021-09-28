import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController, NavController } from "@ionic/angular";
import { MiscService } from "../../../services/misc.service";
import { IonicComponentService } from "../../../services/ionic-component.service";
import { Observable } from "rxjs";
@Component({
  selector: "app-map-detail",
  templateUrl: "./map-detail.page.html",
  styleUrls: ["./map-detail.page.scss"],
})
export class MapDetailPage implements OnInit {
  //**** toolbar for hide and show ****/
  showToolbar = false;
  showTitle = false;
  transition: boolean = false;

  place: Observable<any>;
  //relatedPlaces:Observable<any[]>;
  //relatedPlacesArray: any=[];
  placeId: any;
  placeArray: any = [];





  constructor(
    // private navParams: NavParams,
    public miscService: MiscService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private modalController: ModalController
  ){
    // this.placeId = this.activatedRoute.snapshot.paramMap.get("placeId");
    // console.log("activatedRoute placeId"+this.placeId);

    this.placeId = this.activatedRoute.snapshot.paramMap.get('placeId');
   
  }

  async ngOnInit() {
    await this.getPlaceDetail();
    //await this.getPlaceReview();
  }

  async getPlaceDetail() {
    console.log("placeId---------="+ this.placeId);
    this.place = await this.miscService.getPlaceById(this.placeId);
  
    await this.place.subscribe((res) => {
      // console.log("4 getPlacesDetail subsribe = "+res);
      // console.log("5 getPlacesDetail subsribe = "+JSON.stringify(res));

      this.placeArray = res;
      console.log("############placeArray##########="+ JSON.stringify(this.placeArray));
      // console.log("6 this.placeArray/images="+this.placeArray.images);
      // console.log("7 this.placeArray.travel_categoryId="+this.placeArray.travel_categoryId);
      //this.getRelatedPlace(this.placeArray.travel_categoryId);

      //********* travel-place/favorite/userId  ***********//

    });
  }

  close() {
    this.modalController.dismiss();
  }
  /********** scroll event  *************/
  onScroll($event: CustomEvent) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.transition = true;
      this.showToolbar = scrollTop >= 100;
      //console.log("showToolbar="+this.showToolbar);
      this.showTitle = scrollTop >= 100;
      //console.log("showTitle="+this.showTitle);
    } else {
      this.transition = false;
    }
  }
}
