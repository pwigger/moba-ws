import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {FirebaseServiceProvider} from '../../providers/firebase-service/firebase-service';

import {GoViewPage} from '../go-view/go-view';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private players: FormGroup;

  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider, private formBuilder: FormBuilder) {

    this.players = this.formBuilder.group({
      player1: ['', Validators.required],
      player2: ['', Validators.required],
      player3: ['', Validators.required],
      player4: ['', Validators.required],
      player5: ['', Validators.required],
    });
  }

  addPlayers() {
    for (let i = 1; i < 6; i++) {
      this.firebaseService.addPlayer(this.players.value["player" + i], "#00d181").then(() => {
      });
    }

    this.navCtrl.push(GoViewPage, {
    });
  }
}
