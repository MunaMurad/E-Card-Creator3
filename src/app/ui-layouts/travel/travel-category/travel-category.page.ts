import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController,ModalController} from '@ionic/angular';
import { TravelSearchPage } from '../travel-search/travel-search.page';
import { TravelMapPage } from '../travel-map/travel-map.page';
import { TravelService } from '../../../services/travel.service';
 
import { IonicComponentService} from '../../../services/ionic-component.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-travel-category',
  templateUrl: './travel-category.page.html',
  styleUrls: ['./travel-category.page.scss'],
})
export class TravelCategoryPage implements OnInit {

  showLiner = false;
  showTitle = false;
  transition:boolean = false;


  categoryId: string;
  parentPath: any;

  public categories: any[];

  constructor(
    public travelService: TravelService,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService
  ) { 
    console.log(this.router.url,"Current URL");
  }

  ngOnInit() {
    this.parentPath= this.router.url;
    console.log("....Current route path"+this.parentPath);
    this.getCategory();
  }

  getCategory(){
    this.travelService.getCategories().subscribe(res => {
      console.log("Get categories response="+res);
      this.categories = res
    });
  }
  toggleSideMenu() {
    this.ionicComponentService.sideMenu(); //Add this method to your button click function
  }
  onScroll($event: CustomEvent) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.transition = true;

      this.showTitle = scrollTop >= 44;
      this.showLiner = scrollTop >= 44;
      console.log("showTitle="+this.showTitle);
    }else{
      this.transition = false;
    }
  }
  async openMap() {
    const modal = await this.modalController.create({
      component: TravelMapPage,
      cssClass: '',
      componentProps: {
        //categoryId: categoryId
      }
    });
    return await modal.present();
  }
  async openSearchModal() {
    const modal = await this.modalController.create({
      component: TravelSearchPage,
      componentProps: {
        //categoryId: categoryId
      }
    });
    return await modal.present();
  }
}
