import { Component, OnInit } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  //ngx code
  langs:string []=[];
  constructor(private TranslateService:TranslateService) { 
  this.langs=this.TranslateService.getLangs();
}

  ngOnInit() {
  }
  //this code to select lang button
changelang(event){
this.TranslateService.use(event.detail.value);
console.log(event.detail.value);


}
}
