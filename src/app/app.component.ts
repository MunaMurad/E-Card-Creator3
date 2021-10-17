import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


import { MenuController, Platform, ToastController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public selectedIndex = 0;
  public appPages = [
    {
       title: 'Nearby places',
       url: '/folder/Inbox',
       icon: 'mail'
     },
     {
       title: 'Food delivery',
       url: '/app-food',
       icon: 'paper-plane'
     },
     {
       title: 'Shopping',
       url: '/folder/Favorites',
       icon: 'heart'
     },
     {
       title: 'Real estate',
       url: '/folder/Archived',
       icon: 'archive'
     },
     {
       title: 'Radio station',
       url: '/folder/Trash',
       icon: 'trash'
     },
     {
       title: '',
       url: '/folder/Spam',
       icon: 'warning'
     }
  ];
   public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];



  //**************************************//
  //********** UI layout pages **********//
  //*************************************//
  layoutPages = [

      //my try to add new page to the side menu
      {
        title: 'Walkthrough',
        url: 'walkthrough',
        icon: 'walk'
      },
      {
    title: 'congrats',
    url: 'congrats',
    icon: 'mail-open'
  },

    {
      title: 'Invitation',
      url: 'image-gallery',
      icon: 'mail-open'
    },
  
  {
    title: 'Setting',
    url: 'settings',
    icon: 'settings'
  },
  {
      title: 'Information Page',
      url: 'information',
      icon: 'alert'
    },
    //make unused pages as comment in sidemenue

    // {
    //   title: 'Restaurant',
    //   url: '/food-home',
    //   icon: 'restaurant'
    // },
    // {
    //   title: 'Shopping',
    //   url: '/shopping-home',
    //   icon: 'cart'
    // },
    // {
    //   title: 'Travel',
    //   url: '/travel-home',
    //   icon: 'trail-sign'
    // },
    // {
    //   title: 'Real estate',
    //   url: 'real-home',
    //   icon: 'home'
    // },
    // {
    //   title: 'E-learning',
    //   url: '/app/tabs/map',
    //   icon: 'business'
    // },
    // {
    //   title: 'Podcast | Radio station',
    //   url: 'radio-list',
    //   icon: 'radio'
    // },
  //***************************************//
    // {
    //   title: 'Authentication',
    //   url: '/auth-home',
    //   icon: 'finger-print'
    // },
    // {
    //   title: 'Chat',
    //   url: '/app/tabs/about',
    //   icon: 'chatbox'
    // },
    // {
    //   title: 'Chart',
    //   url: 'chart',
    //   icon: 'podium'
    // },

  //***************************************//
  
    // {
    //   title: 'Feed',
    //   url: 'feed',
    //   icon: 'newspaper'
    // },
  
    // {
    //   title: 'Form',
    //   url: 'form-home',
    //   icon: 'create'
    // },
    // {
    //   title: 'Masonry',
    //   url: 'masonry',
    //   icon: 'grid'
    // },

  //***************************************//
  // {
  //   title: 'Map',
  //   url: 'map-home',
  //   icon: 'map'
  // },
  

  // {
  //   title: 'Signin',
  //   url: 'signin-home',
  //   icon: 'log-in'
  // },
  // {
  //   title: 'Signup',
  //   url: 'signup-home',
  //   icon: 'push'
  // },

  //  {
  //    title: 'Search',
  //    url: 'search',
  //    icon: 'search'
  //  },
  // {
  //   title: 'Empty state',
  //   url: 'empty-state',
  //   icon: 'sad'
  // }
  ];

  //**************************************//
  //********* UI component pages *********//
  //*************************************//

 componentPages = [
    // {
    //   title: 'Accordion',
    //   url: 'accordion',
    //   icon: 'code-slash'
    // },
    // {
    //   title: 'Animation',
    //   url: 'animation',
    //   icon: 'code-slash'
    // },
    // {
    //   title: 'Alert',
    //   url: 'alert',
    //   icon: 'code-slash'
    // },
    // {
    //   title: 'Actionsheet',
    //   url: 'actionsheet',
    //   icon: 'code-slash'
    // },
    // {
    //   title: 'Avatar',
    //   url: 'avatar',
    //   icon: 'code-slash'
    // },
    // {
    //   title: 'Dialog',
    //   url: 'dialog',
    //   icon: 'code-slash'
    // },
  //   {
  //     title: 'Badge',
  //     url: 'badge',
  //     icon: 'code-slash'
  //   },
  //   {
  //     title: 'Button',
  //     url: 'button',
  //     icon: 'code-slash'
  //   },
  //   {
  //     title: 'DateTime',
  //     url: 'datetime',
  //     icon: 'code-slash'
  //   },
  // //***************************************//

  //   {
  //     title: 'Header-shrinking',
  //     url: 'header-shrinking',
  //     icon: 'code-slash'
  //   },
  //   {
  //     title: 'Header-fading',
  //     url: 'header-fading',
  //     icon: 'code-slash'
  //   },
  //   {
  //     title: 'Header-hide/show-title',
  //     url: 'header-title',
  //     icon: 'code-slash'
  //   },

  //   {
  //     title: 'Header-transparent',
  //     url: 'header-transparent',
  //     icon: 'code-slash'
  //   },
  //   {
  //     title: 'Footer-shrinking',
  //     url: 'footer-shrinking',
  //     icon: 'code-slash'
  //   },
  //   {
  //     title: 'Horizontal scrolling card',
  //     url: 'horizontal-card',
  //     icon: 'code-slash'
  //   },
  //   {
  //     title: 'Vertical card',
  //     url: 'vertical-card',
  //     icon: 'code-slash'
  //   },
  //   {
  //     title: 'Icon',
  //     url: 'icon',
  //     icon: 'code-slash'
  //   },
  //   {
  //     title: 'Grid',
  //     url: 'grid',
  //     icon: 'code-slash'
  //   },
  //   {
  //     title: 'List-item',
  //     url: 'list-item',
  //     icon: 'code-slash'
  //   },
  //   {
  //     title: 'Modal',
  //     url: 'modal',
  //     icon: 'code-slash'
  //   },
  //   {
  //     title: 'Progress bar',
  //     url: 'progress-bar',
  //     icon: 'code-slash'
  //   },
  //   {
  //     title: 'Rating',
  //     url: 'rating',
  //     icon: 'code-slash'
  //   },
  //   {
  //     title: 'Radio',
  //     url: 'radio',
  //     icon: 'code-slash'
  //   },
  //   {
  //     title: 'Range',
  //     url: 'range',
  //     icon: 'code-slash'
  //   },
    // {
    //   title: 'Refresher',
    //   url: 'refresher',
    //   icon: 'code-slash'
    // },
    // {
    //   title: 'Skeleton',
    //   url: 'skeleton',
    //   icon: 'code-slash'
    // },
    // {
    //   title: 'Segment',
    //   url: 'segment',
    //   icon: 'code-slash'
    // },
    
    // {
    //   title: 'Select',
    //   url: 'select',
    //   icon: 'code-slash'
    // },
    // {
    //   title: 'Search',
    //   url: 'searchbar',
    //   icon: 'code-slash'
    // },
    // {
    //   title: 'Toast',
    //   url: 'toast',
    //   icon: 'code-slash'
    // },
    // {
    //   title: 'Toolbar',
    //   url: 'toolbar',
    //   icon: 'code-slash'
    // }
 ];




  //**************************************//
  //******** Firebase crud pages *********//
  //*************************************//



  // crudPages = [
  //   {
  //     title: 'List',
  //     url: '/app/tabs/schedule',
  //     icon: 'flame'
  //   },
  //   {
  //     title: 'Add',
  //     url: '/schedule',
  //     icon: 'flame'
  //   },
  //   {
  //     title: 'Update',
  //     url: '/app/tabs/speakers',
  //     icon: 'flame'
  //   }
  // ];

  //**************************************//
  //******** Firebase auth pages *********//
  //*************************************//
  authPages = [
    {
      title: 'Signin',
      url: 'fire-signin',
      icon: 'log-in'
    },
   /* {
      title: 'Signup',
      url: 'fire-signup',
      icon: 'flame'
    },
    {
      title: 'Forgot',
      url: 'fire-forgot',
      icon: 'flame'
    },
    {
      title: 'Profile',
      url: 'fire-profile',
      icon: 'flame'
    } */
  ];

  //**************************//
  //******** Themes *********//
  //************************//
  themePages = [
    /* {
      title: 'Color ',
      url: 'ui-colors',
      icon: 'color-palette'
    } */
  ];  
  loggedIn = false;
  dark = false;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    // private userData: UserData,
    // private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
  ) {
    this.initializeApp();
  }


  initializeApp() {



    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
