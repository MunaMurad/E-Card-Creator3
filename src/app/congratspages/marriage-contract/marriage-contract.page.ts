import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marriage-contract',
  templateUrl: './marriage-contract.page.html',
  styleUrls: ['./marriage-contract.page.scss'],
})
export class MarriageContractPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
option = {
  slidesPerView: 1.5,
  centeredSlides: true,
 //choose the most proborate wether the pictures loops or not
 // loop: true,
  spaceBetween: 10,
  //autoplay: true,
}

}
