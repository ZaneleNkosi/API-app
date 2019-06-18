import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialProvider } from '../../providers/social/social';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:any;
  type: any;

  constructor(public navCtrl: NavController, private socialProvider: SocialProvider, public http:Http) {
      this.socialProvider.getHoliday().subscribe(data1 =>{
        console.log(data1.response.holidays);
        this.data = data1.response.holidays;
        
      });
  }

}
