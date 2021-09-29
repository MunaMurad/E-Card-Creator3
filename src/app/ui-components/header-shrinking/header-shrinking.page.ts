import { Component, OnInit} from '@angular/core';
import { HideHeaderConfig } from '../../shared/hide-header.directive';
@Component({
  selector: 'app-header-shrinking',
  templateUrl: './header-shrinking.page.html',
  styleUrls: ['./header-shrinking.page.scss'],
})
export class HeaderShrinkingPage implements OnInit {

 //****** Hide header ********/
 headerScrollConfig: HideHeaderConfig = { cssProperty: 'margin-top', maxValue: 55};

  constructor() { }

  ngOnInit() {
  }


}
