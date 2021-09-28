import { Component, OnInit , ViewChild} from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';

import { ActivatedRoute , Router} from '@angular/router';
import { IonContent ,ModalController,NavParams,NavController, IonSearchbar} from '@ionic/angular';
import { ShoppingService  } from '../../../services/shopping.service';


@Component({
  selector: 'app-shopping-search',
  templateUrl: './shopping-search.page.html',
  styleUrls: ['./shopping-search.page.scss'],
})
export class ShoppingSearchPage implements OnInit {

  @ViewChild('searchbar', {static: false}) searchbar:IonSearchbar;
  public resultList: any[];
  public loadedResultList: any[];

  constructor(
    private firestore: AngularFirestore,
    public shoppingService: ShoppingService,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
  ) { }


  async close(){
    await this.modalController.dismiss();
  }

  async openDetail(itemId){
    console.log("itemId"+itemId);

    
    // call loading //


    this.router.navigateByUrl('/shopping-detail/'+itemId);
    await this.modalController.dismiss();
    //this.router.navigateByUrl('/side-menu/travel/tabs/tab1/travel-place-detail/'+placeId);

    // set timeout
    // setTimeout(function(){
    //   await this.modalController.dismiss();
    // }, 1000);
    //await this.modalController.dismiss();
    //await this.delay(1000);
   
  }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


  ngOnInit() {
    console.log("--------------first time loaded-------------");
    this.shoppingService.searchItem().subscribe(results => {
      console.log(results);
      this.loadedResultList = results;
    });
    // this.firestore.collection<any>('/travel_place').valueChanges().subscribe( results => {
    //     //this.resultList = results;
    //     this.loadedResultList = results;
    // });
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
    this.resultList = this.resultList.filter(currentGoal => {
      if (currentGoal.name && searchTerm) {

        if (currentGoal.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          console.log("Number of result value : true");
          return true;
        }
        console.log("Unmatch vlaue : false");
        return false;
      }
    });

  }


}

