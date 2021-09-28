import { Component, OnInit } from '@angular/core';
import { HideHeaderConfig } from '../../shared/hide-header.directive';
@Component({
  selector: 'app-footer-shrinking',
  templateUrl: './footer-shrinking.page.html',
  styleUrls: ['./footer-shrinking.page.scss'],
})
export class FooterShrinkingPage implements OnInit {
 //****** Hide footer ********/
 footerScrollConfig: HideHeaderConfig = { cssProperty: 'margin-bottom', maxValue: 160};

  constructor() { }

  ngOnInit() {
  }

}
