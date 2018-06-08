import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  //Membervariable
  playserRef: AngularFireList<any>;
  players: Observable<any[]>;
  counter:number;



  constructor(public afd: AngularFireDatabase) {
    this.playserRef = this.afd.list('/players/');
    this.playserRef.remove();

    this.counter=0;
    this.players = this.playserRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  addPlayer(name, color) {
    this.counter++;
    return this.playserRef.push({ name: name, color: color, time:"00:00:00", rank:0});
  }

  getPlayers() {
    return this.players;
  }
  getCount()
{return this.counter;}
resetCount(){this.counter=0;}

  setTime(key, time, rank) {
    console.log('set Color to Danger')
    return this.playserRef.update(key, { time: time, rank:rank, color: 'finished button button-md button-default button-default-md button-block button-block-md button-large button-large-md' });
  }
}
