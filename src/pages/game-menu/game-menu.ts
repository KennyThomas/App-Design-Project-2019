import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{HomePage} from '../home/home';
import{EasyPage} from '../easy/easy';


/**
 * Generated class for the GameMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-menu',
  templateUrl: 'game-menu.html',
})
export class GameMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameMenuPage');
  }

  Easy(){


    this.navCtrl.push(EasyPage);
    
    
    }


    Medium(){


      this.navCtrl.push("MediumPage");
      
      
      }


      Hard(){


        this.navCtrl.push("HardPage");
        
        
        }


        BackHome(){


          this.navCtrl.push(HomePage);
          
          
          }



}
