import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
//import { HttpClientModule } from '@angular/common/http';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';

//******** Angularfire ********/
import { AngularFireModule } from '@angular/fire';

//******* firebase api key ********//
import { environment } from '../environments/environment';

//******* firebase api key ********//
import { AngularFireAuthModule } from '@angular/fire/auth';

//******* firebase firestore ********//
import { AngularFirestoreModule } from '@angular/fire/firestore';

//******* firebase storage ********//
import { AngularFireStorageModule } from '@angular/fire/storage';




//******** UI_components / modal detail *********/
import { ModalContentPageModule } from './ui-components/modal-content/modal-content.module';

//******** UI_components / modal detail *********/
import { MapDetailPageModule } from './ui-layouts/map/map-detail/map-detail.module';



//******* Travel page module ********//
import { TravelMapPageModule } from './ui-layouts/travel/travel-map/travel-map.module';
// import { TravelMapModalPageModule } from './app-travel/travel-map-modal/travel-map-modal.module';
import { TravelSearchPageModule } from './ui-layouts/travel/travel-search/travel-search.module';
// import { TravelPlaceReviewAddPageModule } from './app-travel/travel-place-review-add/travel-place-review-add.module';




import { TravelImageViewPageModule } from './ui-layouts/travel/travel-image-view/travel-image-view.module';

//******* Food page module ********//
import { FoodSearchPageModule } from './ui-layouts/food/food-search/food-search.module';
import { FoodAddressAddPageModule } from './ui-layouts/food/food-address-add/food-address-add.module';
import { FoodAddressEditPageModule } from './ui-layouts/food/food-address-edit/food-address-edit.module';
// //import image gallery page module
// //import { ImageModalPageModule } from './image-modal/image-modal.module';


//******* Shopping page module ********//
import { ShoppingSearchPageModule } from './ui-layouts/shopping/shopping-search/shopping-search.module'
import { ShoppingAddressAddPageModule } from './ui-layouts/shopping/shopping-address-add/shopping-address-add.module';
import { ShoppingAddressEditPageModule } from './ui-layouts/shopping/shopping-address-edit/shopping-address-edit.module';
import { ShoppingSpecialPageModule } from './ui-layouts/shopping/shopping-special/shopping-special.module'

//******* Real estate page module ********//
import { RealSearchPageModule } from './ui-layouts/realestate/real-search/real-search.module'
import { RealMapPageModule } from './ui-layouts/realestate/real-map/real-map.module'


// //******* Radio station page module ********//
import { RadioPlayerPageModule } from './ui-layouts/radio-station/radio-player/radio-player.module';


// //******* UI-layout / gallery viewer ********//
import { ImageGalleryViewPageModule } from './ui-layouts/image-gallery-view/image-gallery-view.module';


// //******** UI_components / modal detail *********/
// import { ModalDetailPageModule } from './ui-components/modal-detail/modal-detail.module';


// //******** ionic4 rating *********/
//import { IonicRatingModule } from 'ionic4-rating/dist';


// //******** Shared module *********/
import { SharedModule} from './shared/shared.module';



import { AppRoutingModule } from './app-routing.module';


import {HttpClientModule, HttpClient} from '@angular/common/http';
 import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader,TranslateService} from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [


    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory:HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),



    
    
    //IonicRatingModule, // Put ionic-rating module here
    SharedModule,
    HttpClientModule,
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'ios'
    }),
    IonicStorageModule.forRoot(),


    AppRoutingModule,

    //******* Travel page module ********//
    TravelImageViewPageModule,
    TravelMapPageModule,
  //   TravelMapModalPageModule,
    TravelSearchPageModule,
  //   TravelPlaceReviewAddPageModule,

    //******* Food page module ********//
    FoodSearchPageModule,
    FoodAddressAddPageModule,
    FoodAddressEditPageModule,

    //******* Shopping page module ********//
    ShoppingSearchPageModule,
    ShoppingAddressAddPageModule,
    ShoppingAddressEditPageModule,
    ShoppingSpecialPageModule,
    // ShoppingImageGalleryPageModule,

    //******* Real estate page module ********//
    RealSearchPageModule,
    RealMapPageModule,

    //******* Radio station page module ********//
    RadioPlayerPageModule,

    //******* UI-components / modal ********//

    ModalContentPageModule,

    //******* UI-layout / gallery ********//
    ImageGalleryViewPageModule,

    //******* UI-layout / map ********//
    MapDetailPageModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
