import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GameMenuPage } from '../pages/game-menu/game-menu';
import { ChartInfoProvider } from '../providers/chart-info/chart-info';
import {IonicStorageModule} from '@ionic/storage';
import { Vibration } from '@ionic-native/vibration/ngx';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GameMenuPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GameMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
   {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChartInfoProvider,
    Vibration
  ]
})
export class AppModule {}
