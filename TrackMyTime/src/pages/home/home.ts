import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import	{	CreatePlayerViewPage }	from	'../create-player-view/create-player-view';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  loadCreatView(event,	item)	{
    this.navCtrl.push(CreatePlayerViewPage,	{
    item:	item
    });
  }

}
