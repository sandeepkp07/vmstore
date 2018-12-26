import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GondolaPage } from './gondola';

@NgModule({
  declarations: [
    GondolaPage,
  ],
  imports: [
    IonicPageModule.forChild(GondolaPage),
  ],
})
export class GondolaPageModule {}
