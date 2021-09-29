import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ModalController,NavController} from '@ionic/angular';

import { RealestateService } from '../../../services/realestate.service';
// import { RealSearchPage } from '../../real-search/real-search.page';
import { Observable, Subscription } from 'rxjs';

// import travel-map page for modal
import { RealMapPage } from '../real-map/real-map.page';
import { RealSearchPage } from '../real-search/real-search.page';


import { HideHeaderConfig } from '../../../shared/hide-header.directive';
@Component({
  selector: 'app-real-list',
  templateUrl: './real-list.page.html',
  styleUrls: ['./real-list.page.scss'],
})
export class RealListPage implements OnInit {
 // footerScrollConfig: HideHeaderConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
 footerScrollConfig: HideHeaderConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
 headerScrollConfig: HideHeaderConfig = { cssProperty: 'margin-top', maxValue: 45};

  viewType: string = "buy";
  buyItems: Observable<any[]>;
  rentItems: Observable<any[]>;
  //public houseSelType: string = "map";
  constructor( 
    public realestateService: RealestateService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    //public alertController: AlertController,
    private modalController: ModalController) 
    { 

    }

  ngOnInit() {
    this.buyItems = this.realestateService.getHouseByType("buy");
    this.rentItems = this.realestateService.getHouseByType("rent");
  }

  // async openSearchModal() {
  //   console.log("open house search modal");
  //   const modal = await this.modalController.create({
  //     component: RealSearchPage,
  //     componentProps: {
  //       //categoryId: categoryId
  //     }
  //   });
  //   return await modal.present();
  // }
  async openMap() {

    const modal = await this.modalController.create({
      component: RealMapPage,
      cssClass: '',
      componentProps: {
        //viewType: viewType
      }
    });
    return await modal.present();
  }
  async openSearchModal() {


    const modal = await this.modalController.create({
      component: RealSearchPage,
      cssClass: '',
      componentProps: {
        //viewType: viewType
      }
    });
    return await modal.present();
  }
}

