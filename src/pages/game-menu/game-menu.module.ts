import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameMenuPage } from './game-menu';
import { EasyPage } from '../easy/easy';

@NgModule({
  declarations: [
    GameMenuPage,
    EasyPage
 
  ],
  imports: [
    IonicPageModule.forChild(GameMenuPage),
    GameMenuPage,
   

  ],
})
export class GameMenuPageModule {}
