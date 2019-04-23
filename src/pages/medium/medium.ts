import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import{Vibration} from '@ionic-native/vibration/ngx';


@IonicPage()
@Component({
  selector: 'page-medium',
  templateUrl: 'medium.html',
})
export class MediumPage {

  buttonDisabled: boolean;
  buttonDisabled2: boolean;
  buttonDisabled3: boolean;
  buttonDisabled4: boolean;
  buttonDisabled5: boolean;
  buttonOf:boolean = true;
 
   selectedArtist: String = " ";
  selectedArtist2: String = " ";
  selectedArtist3: String = " ";
  selectedArtist4: String = " ";
  selectedArtist5: String = " ";

  score:any = 0;
incorrectScore:any = 0;


  songs:any = [    //Lewis Capaldi[3]
'Ed Sheeran',
'JP Cooper',
'Calum Scott',
'Lewis Capaldi'

  ];

  songs2:any = [        //Kings of Leon[2]
  'Stereophonics',
  'The Kooks',
  'Kings of Leon',
  'The Killers'
    
      ];



   songs3:any = [           //Calvin Harris  [0]
  'Calvin Harris',
  'Martin Garrix',
  'Rudimental',
  'David Guetta'
        
          ];




   songs4:any = [             //AC/DC[2]
  'Queen',
  'Guns N Roses',
  'AC/DC',
  'Led Zeppelin'
            
              ];

  songs5:any = [
  'George Ezra',           //George Ezra[0]
  'James Bay',
  'Gavin James',
   'Kodaline'
                          
                            ];




  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage, private vibration:Vibration) {

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
    
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediumPage');
  }





  radioChangeHandler(event:any){


    this.selectedArtist = event.target.value;
  }
  
  
  CheckAnswer(){
  if(this.selectedArtist == this.songs[3]){
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
  if(this.selectedArtist3== this.songs3[0]){
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
  if(this.selectedArtist4== this.songs4[2]){
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
  if(this.selectedArtist5== this.songs5[0]){
  this.buttonDisabled5 = true;
  ;
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
    
   
    this.buttonOf =false;

   
    }
    else{
    
  
 
    }
    
    
    }
  
  
  
    Advance(){
      this.storage.set('ScoreMedium', this.score);
      this.storage.set('incorrectScoreMedium', this.incorrectScore);
      this.navCtrl.pop();
  
  
  this.navCtrl.push("HardPage")





  
  
    }
  
  
  


    






















}
