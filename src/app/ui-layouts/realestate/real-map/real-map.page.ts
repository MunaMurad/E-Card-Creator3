import { Component, OnInit,ViewChild , ElementRef  } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ModalController,NavParams,NavController,LoadingController} from '@ionic/angular';
import { RealestateService } from '../../../services/realestate.service';
import { RealSearchPage } from '../real-search/real-search.page';
import { IonicComponentService} from '../../../services/ionic-component.service';
import { Observable, Subscription } from 'rxjs';
declare var google;

@Component({
  selector: 'app-real-map',
  templateUrl: './real-map.page.html',
  styleUrls: ['./real-map.page.scss'],
})
export class RealMapPage implements OnInit {

  @ViewChild("map", { static: false }) mapElement: ElementRef;
  viewType: string = "buy";
 // buyItems: Observable<any[]>;
  public buyItemsArray: any[];
  //rentItems: Observable<any[]>;
  public places: any[];




  viewDetail: boolean = false;

  placeId: string;
  placeTitle: string;
  placeLocation: string;
  placePrice: number;
  placeFeatures: string;
  placeImage: string;







  categoryId:any
 // public places: any[];
  //public places: Observable<Place[]>;
      
  map: any;
  mapMarker: any;
  markerSelected: boolean = false;
  
  //******************** Map style  **************************//
  //***** go to snazzymaps.com for more map style  ***********//
  //**********************************************************//
  mapStyle: any = [{"featureType":"landscape.man_made","elementType":"all","stylers":[{"color":"#faf5ed"},{"lightness":"0"},{"gamma":"1"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#bae5a6"}]},{"featureType":"road","elementType":"all","stylers":[{"weight":"1.00"},{"gamma":"1.8"},{"saturation":"0"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ffb200"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"lightness":"0"},{"gamma":"1"}]},{"featureType":"transit.station.airport","elementType":"all","stylers":[{"hue":"#b000ff"},{"saturation":"23"},{"lightness":"-4"},{"gamma":"0.80"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#a0daf2"}]}];

  infoWindows: any=[];




  constructor(
    public realestateService: RealestateService,
   // private navParams: NavParams, 
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private ionicComponentService: IonicComponentService,
    public router: Router
  ){


    this.viewType = this.activatedRoute.snapshot.paramMap.get('viewType');

    console.log("__________viewType="+ this.activatedRoute.snapshot.paramMap.get('viewType'));
   }

  ngOnInit() {
    this.getPlace();

    // setTimeout(() => {
    //    this.displayGoogleMap(); // call async / await
    // }, 6000);
  }
  async close(){
    await this.modalController.dismiss();
  }
  getBuyItems(){
   // this.buyItems = this.realestateService.getHouseByType("buy");
    
  }
  getRentItems(){
    //this.rentItems = this.realestateService.getHouseByType("rent");
  }
  // async close(){
  //   await this.modalController.dismiss();
  // }



  //*********************************************//
  //************** 1.Get place ******************//
  //*********************************************//



  async getPlace(): Promise<void> {
 
    this.ionicComponentService.presentLoading();
     await  this.realestateService.getAllHouse().subscribe(actionArray => {
      //onsole.log("######################### firebase/ getPlace loaded ="+actionArray);
      this.places = actionArray;
      console.log("+++++++++++++= ........place array="+JSON.stringify(this.places));
      this.ionicComponentService.dismissLoading();
      this.displayGoogleMap(); // call async / await
    });
    // await setTimeout(() => {
    //    this.displayGoogleMap(); // call async / await
    //    loading.dismiss();
    // }, 2000);
    console.log("2");
   
  }

  goDetail(placeId: string){
    this.ionicComponentService.presentTimeoutLoading(500,true);
    console.log("...goDetail placeId="+placeId);
    this.close();
    //this.router.navigateByUrl('/real-detail/'+placeId); //animated="false"
    this.navCtrl.navigateForward('/real-detail/'+placeId, { animated: false, });
  }



  //*********************************************//
  //************** 2. Display map ***************//
  //*********************************************//




  displayGoogleMap() {
    let latLng = new google.maps.LatLng(13.801532791932946, 100.54677690766607);
    let mapOptions = {
        center: latLng,
        zoom: 13,
        styles: this.mapStyle,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
    };
    console.log("call map>>>>>>>");
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
   // delay or await 
    this.addMarkersToMap()
  }

  //*********************************************//
  //************** 3. Add marker ****************//
  //*********************************************//


// reload marker : https://stackoverflow.com/questions/22773651/reload-markers-on-googles-maps-api
  addMarkersToMap() {
    console.log("<>>>>>>> call addMarkeToMap");

    for(let place of this.places) {
      //console.log("lat="+place.lat);
      var position = new google.maps.LatLng(place.lat, place.lng);
      var markerIcon = {
        url: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png", // icon url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      };



      //var markerIcon = 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png'
      this.mapMarker = new google.maps.Marker({
        position: position,
        animation: google.maps.Animation.DROP,

        markerSelected: true,

        // name: place.name,
        // description: place.description,
        // image: place.image,
        // rating: place.rating,

        //**** Custom Marker Symbols ****/
        icon: markerIcon,

        //anchorPoint: new google.maps.Point(0, -40),
      });

      this.mapMarker.setMap(this.map);
        // Add a marker clusterer to manage the markers.
   
      // add information window to marker
      //this.addInfoWindowToMarker(mapMarker);
      this.map.setCenter(position);

      // click event list
      // google.maps.event.addListener( mapMarker, 'click', function() {
      //   alert( place.lat + "-" + place.lng + "//placeId=" + place.id);

      //   /// do update something
      // });
      //his.addInfoWindowToMarker(mapMarker);
      google.maps.event.addListener(this.mapMarker, "click", () => {
        this.getPlaceDetail(
          place.id,
          place.title,
          place.location,
          place.price,
          place.short_features,
          place.image_header
        );
      });
    }
  
  }



  getPlaceDetail(placeId, title, location, price,short_features, image_header) {
    this.viewDetail = true;
    this.placeId = placeId;
    this.placeTitle = title;
    this.placeLocation = location;
    this.placePrice = price;

    this.placeFeatures = short_features;
    this.placeImage = image_header;
    console.log("&&&&&&&&&&&&&& placeTitle=" + this.placeTitle);
    console.log("&&&&&&&&&&&&&& placeLocation=" + this.placeLocation);
    console.log("&&&&&&&&&&&&&& placeFeatures=" + this.placeFeatures);

    //console.log("placeName="+this.placeName);
  }

   openDetail(url,itemId){
    //await this.modalController.dismiss()
    this.router.navigateByUrl('/'+url+'/'+itemId);
  }
  // async openDetail(){
  //   await this.modalController.dismiss();

    
  // }

  async openSearchModal() {
    console.log("open house search modal");
    const modal = await this.modalController.create({
      component: RealSearchPage,
      componentProps: {
        //categoryId: categoryId
      }
    });
    return await modal.present();
  }




}

