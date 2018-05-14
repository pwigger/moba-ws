import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {FirebaseServiceProvider} from '../../providers/firebase-service/firebase-service';

import {GoViewPage} from '../go-view/go-view';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private players: FormGroup;

  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider, private formBuilder: FormBuilder) {

    this.players = this.formBuilder.group({
      player1: [''],
      player2: [''],
      player3: [''],
      player4: [''],
      player5: [''],
    });
  }

  addPlayers() {
    for (let i = 1; i < 6; i++) {
      this.firebaseService.addPlayer(this.players.value["player" + i], "0050d1").then(() => {
      });
    }

    this.navCtrl.push(GoViewPage, {
    });
  }
}
