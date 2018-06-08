import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the RankingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

  players: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseServiceProvider) {
    this.players = this.firebaseService.getPlayers();
    this.players = this.players.map((data) => {
      data.sort((a, b) => {
        return a.time < b.time ? -1 : 1;
      });
      return data;
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RankingPage');
  }

  loadHomeView() {
    this.firebaseService.playserRef.remove();
    this.navCtrl.push(HomePage, {});
  }

  

}
