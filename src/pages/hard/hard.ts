import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{GameMenuPage} from '../game-menu/game-menu';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the HardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hard',
  templateUrl: 'hard.html',
})
export class HardPage {
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




  songs:any = [    //Red Hot Chili Peppers[2]
'Green Day',
'Nirvana',
'Red Hot Chili peppers',
'The Black Keys'

  ];

  songs2:any = [        //Paolo Nutini[3]
  'Jamie T',
  'Razorlight',
  'Vance Joy',
  'Paolo Nutini'
    
      ];



   songs3:any = [           //Mumford & Sons [1]
  'Kings of Leon',
  'Mumford & Sons',
  'Lord Huron',
  'The Lumineers '
        
          ];




   songs4:any = [             //Bruce Springsteen[2]
  'Billie Joel',
  'Bob Seger',
  'Bruce Springsteen',
  'Tom Petty'
            
              ];

  songs5:any = [
  'Foo Fighters',           //Foo Fighters[0]
  'Weezer',
  'Pearl Jam',
   'Nirvana'
                          
                            ];


  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HardPage');
  }



  radioChangeHandler(event:any){


    this.selectedArtist = event.target.value;
  }
  
  
  CheckAnswer(){
  if(this.selectedArtist == this.songs[2]){
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
  if(this.selectedArtist2 == this.songs2[3]){
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
  if(this.selectedArtist3== this.songs3[1]){
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
      this.storage.set('ScoreHard', this.score);
      this.navCtrl.pop();
  
  this.navCtrl.push(GameMenuPage)
  
  
    }
  
  
  





































}
