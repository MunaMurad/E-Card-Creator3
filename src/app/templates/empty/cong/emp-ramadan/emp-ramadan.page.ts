import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emp-ramadan',
  templateUrl: './emp-ramadan.page.html',
  styleUrls: ['./emp-ramadan.page.scss'],
})
export class EmpRamadanPage implements OnInit {

  constructor(
    private router: Router,

  ) { }

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
  
  editImage(imageSrc){
    this.router.navigate(['../../../image-editor', {imageSrc: imageSrc}]);
  }
  
  }
