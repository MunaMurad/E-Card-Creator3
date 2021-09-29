import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ModalController,NavController} from '@ionic/angular';
import { TravelSearchPage } from '../travel-search/travel-search.page';
import { TravelMapPage } from '../travel-map/travel-map.page';
import { TravelService} from '../../../services/travel.service';
import { IonicComponentService} from '../../../services/ionic-component.service';
import { Observable, Subscription } from 'rxjs';

//import { HideHeaderConfig } from '../../shared/hide-header.directive';


@Component({
  selector: 'app-travel-home',
  templateUrl: './travel-home.page.html',
  styleUrls: ['./travel-home.page.scss'],
})
export class TravelHomePage implements OnInit {

  public currentRoute: any;
  public parentPath: any;

  // hide header
  //headerScrollConfig: HideHeaderConfig = { cssProperty: 'margin-top', maxValue: 58};
  // // hide footer 
  //footerScrollConfig: HideHeaderConfig = { cssProperty: 'margin-bottom', maxValue: undefined };

  public categories: any[];
  public recommended: any[];
  public topRatingPlaces: any[];
  public favorites: any[];
  public tags: any[]; 

  slideOption = {
    slidesPerView: 'auto',
    grabCursor: true,
    mousewheel: {
      invert: true,
    },
  };


  constructor( 
    public travelService: TravelService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private modalController: ModalController,
    private ionicComponentService: IonicComponentService
  ) { }


  ngOnInit() {
    this.ionicComponentService.presentLoading(); // call loading 
    this.getCategory();
    this.getRecommened();
    this.getTopRatingPlaces();
    this.getTag();
    //this.getFavorite();
    //console.log("....Current route path"+this.router.url); //  /routename
    this.parentPath= this.router.url;
    console.log("....Current route path"+this.parentPath);

  }
  getCategory(){
    this.travelService.getCategories().subscribe(actionArray => {
      //console.log("...getCategory="+actionArray);
      this.categories = actionArray
    });
  }
  getRecommened(){
    this.travelService.getRecommended().subscribe(actionArray => {
      //console.log("...getRecommened="+actionArray);
      this.recommended = actionArray
    });

  }
  getTopRatingPlaces(){
    this.travelService.getTopRatingPlaces().subscribe(actionArray => {
      //console.log("...getTopRatingPlaces = "+actionArray);
      this.topRatingPlaces = actionArray
    });

  }


  getFavorite(){
    this.travelService.getFavorite().subscribe(actionArray => {
      //console.log("..getFavorite="+actionArray);
      this.favorites = actionArray
    
    });
  }


  getTag(){
    this.travelService.getTags().subscribe(actionArray => {
      //console.log("...getTag = "+actionArray);
      this.tags = actionArray;
      this.ionicComponentService.dismissLoading();  // close loading 
    });
  }
  toggleSideMenu() {
    this.ionicComponentService.sideMenu(); //Add this method to your button click function
  }
  openSearchPage(){
    console.log("Search bar");
    this.router.navigateByUrl('/travel-search');
  }
  ngOnDestroy() {
   // no need to destroy subscription 
  }



  openPlaceDetail(placeId){
   // this.router.navigate(['/travel-place-detail']);
   console.log("...openPlaceDetail")
    //this.router.navigateByUrl(this.router.url+'/travel-place-detail/'+placeId);
    this.router.navigateByUrl('/travel-detail/'+placeId);
  }

  async openSearchModal() {
    console.log("openSearchModal");
    const modal = await this.modalController.create({
      component: TravelSearchPage,
      //cssClass: 'fullscreen-modal',
      componentProps: {
        //categoryId: categoryId
      }
    });
    return await modal.present();
  }
  async openMap() {
    console.log("openModal");
    const modal = await this.modalController.create({
      component: TravelMapPage,
      //cssClass: 'fullscreen-modal',
      componentProps: {
        //categoryId: categoryId
      }
    });
    return await modal.present();
  }
  openDetail(url,itemId){
    this.router.navigateByUrl('/'+url+'/'+itemId);
  }
}
