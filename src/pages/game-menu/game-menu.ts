import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{HomePage} from '../home/home';
import{EasyPage} from '../easy/easy';




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


    this.navCtrl.push("EasyPage");
    
    
    }


    Medium(){


      this.navCtrl.push("MediumPage");
      
      
      }


      Hard(){


        this.navCtrl.push("HardPage");
        
        
        }



        Score(){


          this.navCtrl.push("ScoresPage");
          
          
          }



        BackHome(){


          this.navCtrl.push(HomePage);
          
          
          }



}
