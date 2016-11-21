import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { TestPage } from '../test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list=[];
  constructor(public navCtrl: NavController,public alertCtrl:AlertController) {
    
  }

addTodo(){
let prompt=this.alertCtrl.create({
title:'ADD TODO',
message:"Enter a title for your todo list",
inputs:[  //start inputs
  {
    name:'title',
    placeholder:'Title'
  },
  {
    name:'description',
    placeholder:'Description'
  }

], //end inputs
buttons:[
   {
     text:'Cancel',
     handler:data=>{
       console.log("cancel clicked");
     }
   },
   {
     text:'Add',
     handler:data=>{
       this.list.push(data);
     }
   }
]

});//end create
prompt.present();

}//end addTodo


goNextPage(todo){
this.navCtrl.push(TestPage,{
  todo:todo
})

} //end goNextPage



}
