import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ChartInfoProvider } from '../../providers/chart-info/chart-info';

/**
 * Generated class for the ArtistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-artists',
  templateUrl: 'artists.html',
})
export class ArtistsPage {

  artists: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private CI:ChartInfoProvider) {
  }

 
  ionViewDidLoad(){
    this.CI.getArtistInfo().subscribe((data)=>{
        this.artists=data.artists.artist;

    });
    
  }


BackHome(){


this.navCtrl.push(HomePage);


}


}

