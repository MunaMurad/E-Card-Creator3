import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty-baby',
  templateUrl: './empty-baby.page.html',
  styleUrls: ['./empty-baby.page.scss'],
})
export class EmptyBabyPage implements OnInit {

  constructor(
    private router: Router,

  ) { }

  ngOnInit() {
  }


  
editImage(imageSrc){
  this.router.navigate(['/image-editor', {imageSrc: imageSrc}]);
}

}
