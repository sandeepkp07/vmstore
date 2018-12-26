import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyfileProvider } from '../../providers/myfile/myfile';

@IonicPage()
@Component({
  selector: 'page-gondola',
  templateUrl: 'gondola.html',
  providers: [MyfileProvider],
})
export class GondolaPage {
  public myfile: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public MyFile: MyfileProvider) {
    this.loadPeople();
  }
  loadPeople(){
  this.MyFile.load().then(data => {
    this.myfile = data;
  });
}

}
