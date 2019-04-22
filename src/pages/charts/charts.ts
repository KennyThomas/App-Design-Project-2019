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
  charts : any = [];

  constructor(public navCtrl: NavController,private movieProvider:ChartInfoProvider){
  }

  ionViewDidLoad(){
    this.movieProvider.getChartInfo().subscribe((data)=>{
        this.charts=data.Search;
    });
  }

}
















