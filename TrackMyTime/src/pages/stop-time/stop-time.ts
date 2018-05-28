import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { Observable } from 'rxjs/Observable';

import { HomePage } from '../home/home';
import { RankingPage } from '../ranking/ranking';


/**
 * Generated class for the StopTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let currentTime = 0;
let rank = 1;


@IonicPage()
@Component({
  selector: 'page-stop-time',
  templateUrl: 'stop-time.html',
})


export class StopTimePage {

  players: Observable<any[]>;
  starttime: number;
  currentTimeAsString: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseServiceProvider) {
    this.players = this.firebaseService.getPlayers();

    currentTime = 0;
    rank = 1;

    setInterval(function () {
      currentTime += 9;
    }, 10);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad StopTimePage');
  }

  cancel() {
    this.navCtrl.push(HomePage, {});
  }

  loadRankingView() {
    this.navCtrl.push(RankingPage, {});
  }

  getTime() {
    return format(currentTime);
  }

  finished(key) {
    this.firebaseService.setTime(key, format(currentTime), rank++);
    if (rank > 4) {
      this.loadRankingView();
    }
  }
}


function format(ms) {
  var minutes = Math.floor(ms / (1000 * 60)),
    seconds = Math.floor((ms - minutes * 1000 * 60) / 1000),
    fract = Math.floor((ms - minutes * 1000 * 60 - seconds * 1000) / 10);

  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds + ':' + (fract < 10 ? '0' : '') + fract;
}







