import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePlayerViewPage } from './create-player-view';

@NgModule({
  declarations: [
    CreatePlayerViewPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePlayerViewPage),
  ],
})
export class CreatePlayerViewPageModule {}
