import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GameMenuPage } from '../pages/game-menu/game-menu';
import { EasyPage } from '../pages/easy/easy';
import { MediumPage } from '../pages/medium/medium';
import { HardPage } from '../pages/hard/hard';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GameMenuPage,
    EasyPage,
    MediumPage,
    HardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GameMenuPage,
    EasyPage,
    MediumPage,
    HardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
