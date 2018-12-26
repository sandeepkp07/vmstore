import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ButterflyPage } from '../butterfly/butterfly'
import { GondolaPage } from '../gondola/gondola'
import { PrincessPage } from '../princess/princess'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  page2(){
       this.navCtrl.push(ButterflyPage)
  }
  page3(){
     this.navCtrl.push(GondolaPage)
}
 page4(){
    this.navCtrl.push(PrincessPage)
}
}
