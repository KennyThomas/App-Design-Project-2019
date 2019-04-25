import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ChartInfoProvider } from '../../providers/chart-info/chart-info';



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
        this.artists=data.artists.artist;             //gets the JSON data

    });
    
  }


BackHome(){


this.navCtrl.push(HomePage);


}


}

