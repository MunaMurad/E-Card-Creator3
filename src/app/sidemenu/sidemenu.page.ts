import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Nearby places',
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'City guide app',
      url: '/side-menu/travel',
      icon: 'mail'
    },
    {
      title: 'Food delivery app',
      url: '/side-menu/food',
      icon: ''
    },
    {
      title: 'Shopping app',
      url: '/side-menu/shopping',
      icon: ''
    },
    {
      title: 'Real estate app',
      url: '/side-menu/realestate',
      icon: ''
    },
    {
      title: 'Radio station app',
      url: '/side-menu/radio',
      icon: ''
    },
    {
      title: 'chat',
      url: '/side-menu/chat',
      icon: ''
    },
    {
      title: 'feed',
      url: '/side-menu/feed',
      icon: ''
    },
    {
      title: 'intro',
      url: '/side-menu/intro',
      icon: ''
    },
    // {
    //   title: 'form',
    //   url: '/side-menu/form',
    //   icon: ''
    // },
    {
      title: 'image gallery',
      url: '/side-menu/gallery',
      icon: ''
    },
  ];




  
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    // private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar
  ) {
    //this.initializeApp();
  }


  ngOnInit() {
  }

}
