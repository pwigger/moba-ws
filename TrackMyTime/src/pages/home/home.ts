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
      player4: ['', Validators.required]
    });
  }

  addPlayers() {
    for (let i = 1; i < 5; i++) {
      this.firebaseService.addPlayer(this.players.value["player" + i], this.getColor()).then(() => {
      });
    }

    this.navCtrl.push(GoViewPage, {
    });
  }
  getColor(){
   
    console.log("royal")
    var random=Math.floor((Math.random() * 5) + 1);
    if(random==1){return "c1 button button-md button-default button-default-md button-block button-block-md button-large button-large-md"}
    if(random==2){return "c2 button button-md button-default button-default-md button-block button-block-md button-large button-large-md";}
    if(random==3){return "c3 button button-md button-default button-default-md button-block button-block-md button-large button-large-md";}
    if(random==4){return "c4 button button-md button-default button-default-md button-block button-block-md button-large button-large-md";}
    else {return "c5 button button-md button-default button-default-md button-block button-block-md button-large button-large-md";}
 
}
}
