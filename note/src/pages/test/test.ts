import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/*
  Generated class for the Test page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {
   todo:any;
  constructor(public navCtrl: NavController, public navParams:NavParams) {
     this.todo=this.navParams.get("todo");

  }

  pop(){
    this.navCtrl.pop();
  }
      
  }


