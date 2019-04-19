import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MediumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  buttonOf:boolean = false;
 
   selectedArtist: String = " ";
  selectedArtist2: String = " ";
  selectedArtist3: String = " ";
  selectedArtist4: String = " ";
  selectedArtist5: String = " ";

  score:any = 0;




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




  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  alert("correct");
  this.score+=5;
  }
  else
  {
    alert("answer wrong please try again");
    this.buttonDisabled = false;
  
  }
  
  ///////////////////////////////////////////////////////////////////////////////////////////  QUESTION 2
  
  }
  
  radioChangeHandler2(event:any){
  
  
    this.selectedArtist2 = event.target.value;
  }
  
  
  CheckAnswer2(){
  if(this.selectedArtist2 == this.songs2[2]){
  this.buttonDisabled2 = true;
  alert("correct");
  this.score+=5;
  }
  else
  {
    alert("answer wrong please try again");
    this.buttonDisabled2 = false;
  
  }
  
  
  
  }
  
  //////////////////////////////////////////////////////////////////////////////// QUESTION 3
  
  
  
  radioChangeHandler3(event:any){
  
  
    this.selectedArtist3 = event.target.value;
  }
  
  
  CheckAnswer3(){
  if(this.selectedArtist3== this.songs3[0]){
  this.buttonDisabled3 = true;
  alert("correct");
  this.score+=5;
  
  
  }
  else
  {
    alert("answer wrong please try again");
    this.buttonDisabled3 = false;
  
  }
  
  
  
  }
  
  
  
  ///////////////////////////////////////////////////////////////////////QUESTION 4 
  
  radioChangeHandler4(event:any){
  
  
    this.selectedArtist4 = event.target.value;
  }
  
  
  CheckAnswer4(){
  if(this.selectedArtist4== this.songs4[2]){
  this.buttonDisabled4 = true;
  alert("correct");
  this.score+=5;
  }
  else
  {
    alert("answer wrong please try again");
    this.buttonDisabled4 = false;
  
  }
  
  
  
  }
  //////////////////////////////////////////////////////Question 5 
  
  
  radioChangeHandler5(event:any){
  
  
    this.selectedArtist5 = event.target.value;
  }
  
  
  CheckAnswer5(){
  if(this.selectedArtist5== this.songs5[0]){
  this.buttonDisabled5 = true;
  alert("correct");
  this.score+=5;
  }
  else
  {
    alert("answer wrong please try again");
    this.buttonDisabled5 = false;
  
  }
  
  
  
  }
  
  
  CheckScore(){
  
    if(this.score == 25){
    
    alert("Congratulations you have won the easy round1");
    this.buttonOf =false;
    }
    else{
    
    
      alert("You have not reached a score of 25 yet, keep going!!");
    }
    
    
    }
  
  
  
    Advance(){
  
  
  this.navCtrl.push("HardPage")
  
  
    }
  
  
  
























}
