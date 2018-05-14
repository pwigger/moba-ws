import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StopTimePage } from './stop-time';

@NgModule({
  declarations: [
    StopTimePage,
  ],
  imports: [
    IonicPageModule.forChild(StopTimePage),
  ],
})
export class StopTimePageModule {}
