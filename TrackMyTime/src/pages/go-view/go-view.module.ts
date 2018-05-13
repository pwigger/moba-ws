import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoViewPage } from './go-view';

@NgModule({
  declarations: [
    GoViewPage,
  ],
  imports: [
    IonicPageModule.forChild(GoViewPage),
  ],
})
export class GoViewPageModule {}
