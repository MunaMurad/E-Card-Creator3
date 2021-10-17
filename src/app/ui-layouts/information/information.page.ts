import { Component, OnInit } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {
  //ngx code
  langs:string []=[];
  constructor(private TranslateService:TranslateService) { 
  this.langs=this.TranslateService.getLangs();
}

  ngOnInit() {
  }
  //this code to select lung button
changelang(event){
this.TranslateService.use(event.detail.value);
console.log(event.detail.value);


}
}
