import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{GameMenuPage} from '../game-menu/game-menu';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

Game(){


this.navCtrl.push(GameMenuPage);


}





}
