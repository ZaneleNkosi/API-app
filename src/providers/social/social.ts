import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the SocialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SocialProvider {

  apiKey = '40c1b39db558e1ca5d926c255e8454e6fcf4f38c';
  url;

  constructor(public http: Http) {
    console.log('Hello SocialProvider Provider');

    this.url = 'https://calendarific.com/api/v2/holidays?api_key=40c1b39db558e1ca5d926c255e8454e6fcf4f38c&country=ZA&year=2019';    
  }

  getHoliday(){return  this.http.get(this.url+'.json')
    .map(res => res.json());
  }
  }


