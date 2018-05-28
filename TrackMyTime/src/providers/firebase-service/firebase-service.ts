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

  constructor(public afd: AngularFireDatabase) {
    this.playserRef = this.afd.list('/players/');
    this.players = this.playserRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  addPlayer(name, color) {
    return this.playserRef.push({ name: name, color: color, time:"00:00:00", rank:0});
  }

  getPlayers() {
    return this.players;
  }

  setTime(key, time, rank) {
    return this.playserRef.update(key, { time: time, rank:rank });
  }
}
