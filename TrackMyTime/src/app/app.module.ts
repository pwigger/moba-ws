import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{	GoViewPage }	from '../pages/go-view/go-view';
import{	StopTimePage }	from '../pages/stop-time/stop-time';
import{	RankingPage }	from '../pages/ranking/ranking';


import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

const firebaseConfig = {
  apiKey: "AIzaSyBTP_XfBml30C9e7X1TaHTIrapAj9lnY84",
  authDomain: "ws6-project.firebaseapp.com",
  databaseURL: "https://ws6-project.firebaseio.com",
  projectId: "ws6-project",
  storageBucket: "ws6-project.appspot.com",
  messagingSenderId: "371172372553"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GoViewPage,
    StopTimePage,
    RankingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GoViewPage,
    StopTimePage,
    RankingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})

export class AppModule {}
