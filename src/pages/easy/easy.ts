import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import{Vibration} from '@ionic-native/vibration/ngx';



@IonicPage()
@Component({
  selector: 'page-easy',
  templateUrl: 'easy.html',
})
export class EasyPage {
  buttonDisabled: boolean;
  buttonDisabled2: boolean;
  buttonDisabled3: boolean;
  buttonDisabled4: boolean;
  buttonDisabled5: boolean;
  buttonOf:boolean = false;
 
   selectedArtist: String = " ";
  selectedArtist2: String = " ";
  selectedArtist3: String = " ";
  selectedArtist4: String = " ";
  selectedArtist5: String = " ";

  score:any = 0;
incorrectScore:any = 0;



  songs:any = [    //Arctic Monkeys[0]
'Arctic Monkeys',
'Foo Fighters',
'Green day',
'1975'

  ];

  songs2:any = [        //post malone[2]
  'Juice WRLD',
  'Khalid',
  'Post Malone',
  'Logic'
    
      ];



   songs3:any = [           //ed sheeran  [1]
  'James Bay',
  'Ed Sheeran',
  'Sam Smith',
  'James Arthur'
        
          ];




   songs4:any = [             //Oasis[0]
  'Oasis',
  'Blur',
  'Kasabian',
  'The Strokes'
            
              ];

  songs5:any = [
  'Elvis Presley',           //the beatles[3]
  'The Rolling Stones',
  'The Who',
   'The Beatles'
                          
                            ];



 
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage , private vibration:Vibration) {


    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(vibration.vibrate);
    }

  
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad EasyPage');
  }




radioChangeHandler(event:any){


  this.selectedArtist = event.target.value;
}


CheckAnswer(){
if(this.selectedArtist == this.songs[0]){
this.buttonDisabled = true;

this.score+=5;

}
else
{
 
  this.buttonDisabled = false;
  navigator.vibrate(2000);
  ++this.incorrectScore;


}

///////////////////////////////////////////////////////////////////////////////////////////  QUESTION 2

}

radioChangeHandler2(event:any){


  this.selectedArtist2 = event.target.value;
}


CheckAnswer2(){
if(this.selectedArtist2 == this.songs2[2]){
this.buttonDisabled2 = true;

this.score+=5;
}
else
{

  this.buttonDisabled2 = false;
  navigator.vibrate(2000);
  ++this.incorrectScore;
}



}

//////////////////////////////////////////////////////////////////////////////// QUESTION 3



radioChangeHandler3(event:any){


  this.selectedArtist3 = event.target.value;
}


CheckAnswer3(){
if(this.selectedArtist3== this.songs3[1]){
this.buttonDisabled3 = true;

this.score+=5;


}
else
{
  
  this.buttonDisabled3 = false;
  navigator.vibrate(2000);
  ++this.incorrectScore;
}



}



///////////////////////////////////////////////////////////////////////QUESTION 4 

radioChangeHandler4(event:any){


  this.selectedArtist4 = event.target.value;
}


CheckAnswer4(){
if(this.selectedArtist4== this.songs4[0]){
this.buttonDisabled4 = true;

this.score+=5;
}
else
{
 
  this.buttonDisabled4 = false;
  navigator.vibrate(2000);
  ++this.incorrectScore;
}



}
//////////////////////////////////////////////////////Question 5 


radioChangeHandler5(event:any){


  this.selectedArtist5 = event.target.value;
}


CheckAnswer5(){
if(this.selectedArtist5== this.songs5[3]){
this.buttonDisabled5 = true;

this.score+=5;
}
else
{
  
  this.buttonDisabled5 = false;
  navigator.vibrate(2000);
  ++this.incorrectScore;
}



}


CheckScore(){

  if(this.score == 25){
  ;
  this.buttonOf =false;
  }
}


  Advance(){
    this.storage.set('ScoreEasy', this.score);
    this.storage.set('incorrectScoreEasy', this.incorrectScore);
    this.navCtrl.pop();

this.navCtrl.push("MediumPage")


  }


















}
