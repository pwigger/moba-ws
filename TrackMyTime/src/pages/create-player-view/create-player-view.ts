import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreatePlayerViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-player-view',
  templateUrl: 'create-player-view.html',
})
export class CreatePlayerViewPage {
  myParam:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myParam = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePlayerViewPage');
  }

}
