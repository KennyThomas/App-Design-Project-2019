import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoresPage');
  }




ViewScoreEasy(){



  this.storage.get('ScoreEasy').then((val1) => {
    this.EasyScore = val1;
    console.log('Your score is ', val1);
  });


}

  ViewScoreMedium(){



    this.storage.get('ScoreMedium').then((val2) => {
      this.MediumScore = val2;
      console.log('Your score is ', val2);
    });


  }

    ViewScoreHard(){



      this.storage.get('ScoreHard').then((val3) => {
        this.HardScore = val3;
        console.log('Your score is ', val3);
      });

  
    }


    Menu(){


this.navCtrl.push(GameMenuPage)
     
  
    }


}



























