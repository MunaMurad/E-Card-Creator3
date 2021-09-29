import { Component, OnInit ,ViewChild , ElementRef} from '@angular/core';

@Component({
  selector: 'app-header-fading',
  templateUrl: './header-fading.page.html',
  styleUrls: ['./header-fading.page.scss'],
})
export class HeaderFadingPage implements OnInit {
  //**** toolbar for hide and show ****/
  showToolbar = false;
  showTitle = false;
  transition:boolean = false;

  constructor() { }

  ngOnInit() {
  }
//********** scroll event  *************/
  onScroll($event: CustomEvent) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.transition = true;
      this.showToolbar = scrollTop >= 100;
      //console.log("showToolbar="+this.showToolbar);
      this.showTitle = scrollTop >= 100;
      //console.log("showTitle="+this.showTitle);
    }else{
      this.transition = false;
    }
  }

}
