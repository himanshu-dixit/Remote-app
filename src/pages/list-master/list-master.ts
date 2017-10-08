import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {

  constructor(public navCtrl: NavController) {
  }
  anal(){
    this.navCtrl.push('SettingsPage')
  }
}
