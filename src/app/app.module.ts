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
// //******** Shared module *********/
import { SharedModule} from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
//ngx translate 
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader,TranslateService} from '@ngx-translate/core';
// import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'../assets/i18n/', '.json');
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
       NgxQRCodeModule,
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

    //******* UI-components / modal ********//

    ModalContentPageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [
    StatusBar,
    SocialSharing,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
