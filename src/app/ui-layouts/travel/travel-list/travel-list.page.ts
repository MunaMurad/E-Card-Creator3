import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ModalController,NavController, LoadingController} from '@ionic/angular';
import { TravelSearchPage } from '../travel-search/travel-search.page';
import { TravelMapPage } from '../travel-map/travel-map.page';
import { TravelService } from '../../../services/travel.service';
import { IonicComponentService} from '../../../services/ionic-component.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.page.html',
  styleUrls: ['./travel-list.page.scss'],
})
export class TravelListPage implements OnInit {
  public places: any[];
  //public places: Observable<Place[]>;
  public categoryId: any;

  constructor( 
    public travelService: TravelService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService,
    private modalController: ModalController) 
    { 
      this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
      console.log(this.router.url,"Current URL");
    }

  ngOnInit() {
    this.getPlace();
  }

  getPlace(){
    console.log("call  getPlace()");
    this.travelService.getPlacesByCatId( this.categoryId ).subscribe(actionArray => {
      console.log(actionArray);
      this.places = actionArray
    });
  }
  async openSearchModal() {
    console.log("openSearchModal");
    const modal = await this.modalController.create({
      component: TravelSearchPage,
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
      cssClass: '',
      componentProps: {
        //categoryId: categoryId
      }
    });
    return await modal.present();
  }


}
