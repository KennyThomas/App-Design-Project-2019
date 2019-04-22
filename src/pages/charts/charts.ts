import { Component } from '@angular/core';
import { NavController,IonicPage} from 'ionic-angular';
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
 
  tracks : any = [];

  constructor(public navCtrl: NavController, 
    private CI:ChartInfoProvider){
  }

  ionViewDidLoad(){
    this.CI.getChartInfo().subscribe((data)=>{
        this.tracks=data.tracks.track;
    });
  }

}















