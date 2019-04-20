import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChartInfoProvider } from '../../providers/chart-info/chart-info';


/**
 * Generated class for the ChartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})
export class ChartsPage {
tracks:String;


  constructor(public navCtrl: NavController, public navParams: NavParams, private CI:ChartInfoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartsPage');


    this.CI.getMusic().subscribe(data =>
      {
        console.log(data);
        
      this.tracks = data.tracks;
      console.log(data.tracks);
    
      
    
      });
      }




  }



















