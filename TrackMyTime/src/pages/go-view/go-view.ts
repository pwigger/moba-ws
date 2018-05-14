import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {StopTimePage} from '../stop-time/stop-time';

/**
 * Generated class for the GoViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-go-view',
  templateUrl: 'go-view.html',
})
export class GoViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad GoViewPage');
  }

  loadStopTimeView() {
    this.navCtrl.push(StopTimePage, {});
  }
}
