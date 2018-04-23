import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HalduaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-haldua',
  templateUrl: 'haldua.html',
})
export class HalduaPage {
myDate;
nama;
bil1;
bil2;
hasil;
dt;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HalduaPage');
  }
  op(isi){

    if(isi==1){
      this.nama="tambah";
      var a= +this.bil1; //atau parseInt(this.bil1);
      var b= +this.bil2;
      var c;
      c=a+b;
      this.hasil=c;
    }else if(isi==2){
      this.nama="Kurang";
      var a= +this.bil1; //atau parseInt(this.bil1);
      var b= +this.bil2;
      var c;
      c=a-b;
      this.hasil=c;
    }else if(isi == 3){
      this.nama="Kali";
      var a= +this.bil1; //atau parseInt(this.bil1);
      var b= +this.bil2;
      var c;
      c=a*b;
      this.hasil=c;
    }else if(isi == 4){
      this.nama="bagi";
      var a= +this.bil1; //atau parseInt(this.bil1);
      var b= +this.bil2;
      var c;
      c=a/b;
      this.hasil=c;
    }else{
      alert("error");
    }

  }
  // kurang(){
  //   this.nama="kurang";
  //   var a= +this.bil1; //atau parseInt(this.bil1);
  //   var b= +this.bil2;
  //   var c;
  //   c=a-b;
  //   this.hasil=c;
  // }
  // kali(){
  //   this.nama="kali";
  //   var a= +this.bil1; //atau parseInt(this.bil1);
  //   var b= +this.bil2;
  //   var c;
  //   c=a*b;
  //   this.hasil=c;
  // }
  // bagi(){
  //   this.nama="bagi";
  //   var a= +this.bil1; //atau parseInt(this.bil1);
  //   var b= +this.bil2;
  //   var c;
  //   c=a/b;
  //   this.hasil=c;
  // }
}
