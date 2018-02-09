import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController,
              public navCtrl: NavController) {}
  
  downloadModel = function(){
    let link = this.downloadLink;
    if (link.includes("vizmonk")){
      console.log("valid link");
    }
    else{
        let alert = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: 'Invalid Link!',
          buttons: ['OK']
        });
        alert.present();
    }
  }

}
