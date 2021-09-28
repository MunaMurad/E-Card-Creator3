import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { MenuController,IonTabs,ModalController,AlertController,NavController, LoadingController} from '@ionic/angular';
import { RadioService } from '../../../services/radio.service';
// import { UserService } from '../../services/user.service';
import { Observable, Subscription } from 'rxjs';

import { RadioPlayerPage } from '../radio-player/radio-player.page';
@Component({
  selector: 'app-radio-list',
  templateUrl: './radio-list.page.html',
  styleUrls: ['./radio-list.page.scss'],
})
export class RadioListPage implements OnInit {

  viewType: string = "list";
  radioId: string;
  
  public radios: Observable<any[]>;
  public podcasts: Observable<any[]>;
  public recommended : Observable<any[]>;
  // public Recommended: Observable<any[]>;
  // public favorites: Observable<any[]>;
  slideOption = {
    slidesPerView: 'auto',
    grabCursor: true
  };
  
  constructor(
    public radioService: RadioService,
    public menuCtrl: MenuController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private modalController: ModalController,
    public router: Router,
    public alertController: AlertController,
    private loadingController: LoadingController ,
  ) { }

  ngOnInit() {
    this.radios = this.radioService.getStationByType('radio');
    this.podcasts = this.radioService.getStationByType('podcast');
    this.recommended = this.radioService.getRecommendedStations();
    //this.Recommended = this.radioService.getRecommendedStations();
    //this.favorites = this.radioService.getFavStations();
  }

  async openPlayer(radioId) {

    console.log("radioId="+radioId);
    const modal = await this.modalController.create({
      component: RadioPlayerPage,
      cssClass: '',
      componentProps: {
        radioId: radioId
      }
    });
    return await modal.present();
  }
  toggleSideMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }
}
