import { Component, OnInit} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController} from '@ionic/angular';

import { TravelService } from '../../../services/travel.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-travel-tag',
  templateUrl: './travel-tag.page.html',
  styleUrls: ['./travel-tag.page.scss'],
})
export class TravelTagPage implements OnInit {


  public tag: Observable<any>;
         tagId: any;


  constructor( 
    public travelService: TravelService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router
  ) 
    { 
      this.tagId = this.activatedRoute.snapshot.paramMap.get('tagId');
      console.log("+++++++++ tagID="+ this.tagId);
    }

  ngOnInit() {
    this.getPlace();

  }
  getPlace(){
    // use async pipe //
    console.log("Tag page call  getPlacesByTag() id = "+ this.tagId);
    this.tag =  this.travelService.getPlacesByTag( this.tagId);
  }
}
