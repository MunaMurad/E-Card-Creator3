import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ModalController,NavController} from '@ionic/angular';

import { RealestateService} from '../../../services/realestate.service';
import { Observable, Subscription } from 'rxjs';
import { RealMapPage } from '../real-map/real-map.page';
import { RealSearchPage } from '../real-search/real-search.page';
import { IonicComponentService} from '../../../services/ionic-component.service';
//import { HideHeaderConfig } from '../../shared/hide-header.directive';

@Component({
  selector: 'app-real-home',
  templateUrl: './real-home.page.html',
  styleUrls: ['./real-home.page.scss'],
})
export class RealHomePage implements OnInit {

  slideOption = {
    slidesPerView: 'auto',
    grabCursor: true
  };

  public currentRoute: any;
  public parentPath: any;

  //********* Observable *********/
  agents: Observable<any[]>;
  buyItems: Observable<any[]>;
  rentItems: Observable<any[]>;
  //rentItems: Observable<any[]>;
  favItems: Observable<any[]>;

  //public categories: any[];
  // public popularArray: any[];
  // public topRatingPlaces: any[];
  // public favorites: any[];
  // public tags: any[]; 


  constructor( 
    public realestateService: RealestateService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private modalController: ModalController,
    private ionicComponentService: IonicComponentService

  ) 
  { }

  ngOnInit() {
    this.agents =  this.realestateService.getTopAgent(10);
    this.buyItems = this.realestateService.getHouseByType("buy");
    this.rentItems = this.realestateService.getHouseByType("rent");
    this.rentItems = this.realestateService.getHouseByType("rent");
   // this.favItems = this.realestateService.getFavPlace();
  }
  toggleSideMenu() {
    this.ionicComponentService.sideMenu();
    //this.menuCtrl.toggle(); //Add this method to your button click function
  }


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
  async openMap(viewType: string) {

    console.log("____________openMap viewType="+ viewType);
    const modal = await this.modalController.create({
      component: RealMapPage,
      cssClass: '',
      componentProps: {
        viewType: viewType
      }
    });
    return await modal.present();
  }
  openDetail(url,itemId){
    this.router.navigateByUrl('/'+url+'/'+itemId);
  }


}

