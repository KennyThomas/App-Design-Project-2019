import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Button } from 'ionic-angular';
import { DISABLED } from '@angular/forms/src/model';
import { NgModel } from '@angular/forms';

/**
 * Generated class for the EasyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-easy',
  templateUrl: 'easy.html',
})
export class EasyPage {
  buttonDisabled: boolean;
  answer:String;
  selectedBand: String = " ";
  score:any = 0;
  bands:any = [
'Arctic Monkeys',
'Foo Fighters',
'Green day',
'1975'

  ];
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EasyPage');
  }
radioChangeHandler(event:any){


  this.selectedBand = event.target.value;
}


CheckAnswer(){
if(this.selectedBand == this.bands[0]){
this.buttonDisabled = true;
alert("correct");
this.score+=5;
}
else
{
  alert("answer wrong please try again");
  this.buttonDisabled = false;

}



}



}
