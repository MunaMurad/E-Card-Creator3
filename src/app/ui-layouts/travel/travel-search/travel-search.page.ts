import { Component, OnInit , ViewChild} from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';

import { ActivatedRoute , Router} from '@angular/router';
import { IonContent ,ModalController,NavParams,NavController, IonSearchbar} from '@ionic/angular';
import { TravelService } from '../../../services/travel.service';
import { IonicComponentService} from '../../../services/ionic-component.service';
@Component({
  selector: 'app-travel-search',
  templateUrl: './travel-search.page.html',
  styleUrls: ['./travel-search.page.scss'],
})
export class TravelSearchPage implements OnInit {
  // angular 8 :https://stackoverflow.com/questions/56704164/angular-viewchild-error-expected-2-arguments-but-got-1
  @ViewChild('searchbar', {static: false}) searchbar:IonSearchbar;
  public resultList: any[];
  public loadedResultList: any[];

  constructor(
    private firestore: AngularFirestore,
    public travelService: TravelService,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService
  ){ 

  }
  async close(){
    await this.modalController.dismiss();
  }

  async openPlaceDetail(placeId){
    console.log("placeId"+placeId);
    // call loading //
    this.ionicComponentService.presentLoading();
    await this.modalController.dismiss();
    //this.router.navigateByUrl('/side-menu/travel/tabs/tab1/travel-place-detail/'+placeId);
    this.router.navigateByUrl('/travel-detail/'+placeId);
    this.ionicComponentService.dismissLoading();
   
  }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  ngOnInit() {
    console.log("--------------first time loaded-------------");
    this.travelService.searchPlaces().subscribe(results => {
      console.log(results);
      this.loadedResultList = results;
    });
  
    let timeoutID = setTimeout(() => {
      this.searchbar.setFocus();
      console.log("setFocus()=======");
      clearTimeout(timeoutID);
    }, 200)


  }

  initializeItems(): void {
    console.log("call initialize")
    this.resultList = this.loadedResultList;
  }


  filterList(evt){
    console.log("call filter")
    this.initializeItems();
    const searchTerm = evt.srcElement.value;
    console.log("search value="+searchTerm);
    if(!searchTerm){
      console.log("return>>>>");
      this.resultList = [] ;
      return
    }
    this.resultList = this.resultList.filter(res => {
      if (res.name && searchTerm) {
        if (res.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          console.log("Number of result value : true");
          return true;
        }
        console.log("Unmatch vlaue : false");
        return false;
      }
    });

  }


}
