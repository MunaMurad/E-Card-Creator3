import { Component, OnInit , ViewChild} from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { ActivatedRoute , Router} from '@angular/router';
import { IonSearchbar} from '@ionic/angular';
import { FoodService  } from '../../services/food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  // angular 8 :https://stackoverflow.com/questions/56704164/angular-viewchild-error-expected-2-arguments-but-got-1
  @ViewChild('searchbar', {static: false}) searchbar:IonSearchbar;
 // @ViewChild('searchbar') searchbar: IonSearchbar;
  public resultList: any[];
  public loadedResultList: any[];

  constructor(
    public foodService: FoodService,
    public router: Router,
  ) { }


  ngOnInit() {
    this.foodService.searchItem().subscribe(results => {
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
  searchByTag(searchTerm){
    
    console.log("call searchByTag")
    this.searchbar.value = "";
    this.initializeItems();
    this.resultList = this.resultList.filter(currentGoal => {
      if (currentGoal.name && searchTerm) {

        if (currentGoal.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          console.log("searchByTag: Number of result value : true");
          return true;
        }
        console.log("searchByTag:Unmatch vlaue : false");
        return false;
      }
    });
  }

}
