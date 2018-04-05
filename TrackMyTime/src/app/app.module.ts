import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreatePlayerViewPage } from '../pages/create-player-view/create-player-view';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreatePlayerViewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreatePlayerViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseServiceProvider
  ]
})
export class AppModule { }

const firebaseConfig = {
  apiKey: "AIzaSyDZeS02gOeRtdh1p3WcS_3KGb49qchY7U0",
  authDomain: "trackmytime-a35b5.firebaseapp.com",
  databaseURL: "https://trackmytime-a35b5.firebaseio.com",
  projectId: "trackmytime-a35b5",
  storageBucket: "trackmytime-a35b5.appspot.com",
  messagingSenderId: "1073782864"
}; 
