import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ButterflyPage } from './butterfly';

@NgModule({
  declarations: [
    ButterflyPage,
  ],
  imports: [
    IonicPageModule.forChild(ButterflyPage),
  ],
})
export class ButterflyPageModule {}
