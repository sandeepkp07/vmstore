import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyfileProvider } from '../../providers/myfile/myfile';

@IonicPage()
@Component({
  selector: 'page-princess',
  templateUrl: 'princess.html',
  providers: [MyfileProvider],
})
export class PrincessPage {
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
