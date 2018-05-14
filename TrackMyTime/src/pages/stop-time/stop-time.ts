import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {FirebaseServiceProvider} from '../../providers/firebase-service/firebase-service';
import {Observable} from 'rxjs/Observable';

import {HomePage} from '../home/home';
import {RankingPage} from '../ranking/ranking';



/**
 * Generated class for the StopTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stop-time',
  templateUrl: 'stop-time.html',
})
export class StopTimePage {

  players: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseServiceProvider) {
    this.players = this.firebaseService.getPlayers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StopTimePage');
  }

  cancel(){
    this.navCtrl.push(HomePage, {});
  }

  loadRankingView(){
    this.navCtrl.push(RankingPage, {});
  }
}
