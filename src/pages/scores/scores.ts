import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import{GameMenuPage} from '../game-menu/game-menu';

@IonicPage()
@Component({
  selector: 'page-scores',
  templateUrl: 'scores.html',
})
export class ScoresPage {

  EasyScore:any =0;
  MediumScore:any = 0;
  HardScore:any = 0;

 incorrectEasyScore:any =0;
 incorrectMediumScore:any = 0;
 incorrectHardScore:any = 0;



  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoresPage');
  }




ViewScoreEasy(){



  this.storage.get('ScoreEasy').then((val1) => {
    this.EasyScore = val1;
  });

  this.storage.get('incorrectScoreEasy').then((val4) => {
    this.incorrectEasyScore = val4;
  });

}

  ViewScoreMedium(){



    this.storage.get('ScoreMedium').then((val2) => {
      this.MediumScore = val2;
      
    });
    this.storage.get('incorrectScoreMedium').then((val5) => {
      this.incorrectMediumScore = val5;
    });


  }

    ViewScoreHard(){



      this.storage.get('ScoreHard').then((val3) => {
        this.HardScore = val3;
       
      });
      this.storage.get('incorrectScoreHard').then((val6) => {
        this.incorrectHardScore = val6;
      });
  
    }


    Menu(){


this.navCtrl.push(GameMenuPage)
     
  
    }


}



























