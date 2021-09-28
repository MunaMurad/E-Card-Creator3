import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController, NavController } from "@ionic/angular";
import { MiscService } from "../../../services/misc.service";
import { IonicComponentService } from "../../../services/ionic-component.service";
import { MapDetailPage } from "../../../ui-layouts/map/map-detail/map-detail.page";
import { Observable, Subscription } from "rxjs";
declare var google;

@Component({
  selector: 'app-map-two',
  templateUrl: './map-two.page.html',
  styleUrls: ['./map-two.page.scss'],
})
export class MapTwoPage implements OnInit {
  @ViewChild("map", { static: false }) mapElement: ElementRef;
  viewDetail: boolean = false;
  placeId: string;
  placeName: string;
  placeDescription: string;
  placeRating: number;
  placeImage: string;

  public places: any[];
  //public places: Observable<Place[]>;

  map: any;
  mapMarker: any;

  //******************** Map style  **************************//
  //***** go to snazzymaps.com for more map style  ***********//
  //**********************************************************//
  mapStyle: any = [
    {
      featureType: "landscape.man_made",
      elementType: "all",
      stylers: [{ color: "#faf5ed" }, { lightness: "0" }, { gamma: "1" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [{ color: "#bae5a6" }],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [{ weight: "1.00" }, { gamma: "1.8" }, { saturation: "0" }],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [{ hue: "#ffb200" }],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry.fill",
      stylers: [{ lightness: "0" }, { gamma: "1" }],
    },
    {
      featureType: "transit.station.airport",
      elementType: "all",
      stylers: [
        { hue: "#b000ff" },
        { saturation: "23" },
        { lightness: "-4" },
        { gamma: "0.80" },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [{ color: "#a0daf2" }],
    },
  ];

  constructor(
    public mapService: MiscService,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private ionicComponentService: IonicComponentService,
    public router: Router
  ) {}

  ngOnInit() {
    this.getPlace();
  }

  //*********************************************//
  //************** 1.Get place ******************//
  //*********************************************//

  async getPlace(): Promise<void> {
    this.ionicComponentService.presentLoading();
    await this.mapService.getAllPlaces().subscribe((actionArray) => {
      //console.log("######################### firebase/ getPlace loaded ="+actionArray);
      this.places = actionArray;
      console.log(
        "+++++++++++++= ........place array=" + JSON.stringify(this.places)
      );
      this.ionicComponentService.dismissLoading();
      this.displayMap(); // call async / await
    });
  }

  //*********************************************//
  //************** 2. Display map ***************//
  //*********************************************//

  displayMap() {  
    let latLng = new google.maps.LatLng(-28.024, 140.887);
    let mapOptions = {
      center: latLng,
      zoom: 5,
      styles: this.mapStyle,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
    };
    console.log("call map>>>>>>>");
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    // delay or await
    this.addMarkersToMap();

  }

  //*********************************************//
  //************** 3. Add marker ****************//
  //*********************************************//

  // reload marker : https://stackoverflow.com/questions/22773651/reload-markers-on-googles-maps-api
  addMarkersToMap() {
    console.log("<>>>>>>> call addMarkeToMap");
    var gmarkers = [];
    for (let place of this.places) {
      console.log("lat="+place.lat);
      var position = new google.maps.LatLng(place.lat, place.lng);
      var markerIcon = {
        url:
          "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png", // icon url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        // origin: new google.maps.Point(0, 0), // origin
        // anchor: new google.maps.Point(0, 0), // anchor
      };

      //var markerIcon = 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png'
      this.mapMarker = new google.maps.Marker({
        position: position,
        animation: google.maps.Animation.DROP,

        markerSelected: true,

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
          place.name,
          place.description,
          place.rating,
          place.image
        );
      });
    }
  }

  ///*** open modal from marker ****//
  /// https://stackoverflow.com/questions/48955417/how-to-display-a-modal-after-clicking-a-marker-in-google-maps
  /// https://www.youtube.com/watch?v=U8BMCD8Y6zk

  //*********************************************//
  //************** 5.Open detail ****************//
  //*********************************************//

  openDetail(placeId: string) {
    this.viewDetail = true;
    console.log("-------pass placeId=" + placeId);
    this.modalController
      .create({
        component: MapDetailPage,
        //cssClass: "small-modal",
        showBackdrop: true,
        componentProps: {
           'placeId': this.placeId,

        },
      })
      .then((modal) => {
        return   modal.present();
      });
  }
  getPlaceDetail(placeId, name, description, rating, image) {
    this.viewDetail = true;
    this.placeId = placeId;
    this.placeName = name;
    this.placeDescription = description;
    this.placeRating = rating;
    this.placeImage = image;
    console.log("placeId=" + this.placeId);
    //console.log("placeName="+this.placeName);
  }
}
