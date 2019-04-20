import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the ChartInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChartInfoProvider {

  constructor(public http: Http) {
    console.log('Hello ChartInfoProvider Provider');
  }


  getMusic(): Observable<any>{
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=0d1afd69d8af4e8f7271690adf77b635&format=json");




  }

}
