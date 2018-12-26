import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrincessPage } from './princess';

@NgModule({
  declarations: [
    PrincessPage,
  ],
  imports: [
    IonicPageModule.forChild(PrincessPage),
  ],
})
export class PrincessPageModule {}
