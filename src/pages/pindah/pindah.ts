import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HalduaPage} from '../haldua/haldua';

/**
 * Generated class for the PindahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pindah',
  templateUrl: 'pindah.html',
})
export class PindahPage {
currentdate;
formatdate;
today;
tahun;
bulan;
hari;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentdate = new Date();
    this.getFormatdate();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PindahPage');
  }
  halduapage(){
    this.navCtrl.push(HalduaPage);
  }
   getFormatdate(){
    var dateObj = new Date();
    var monthName = ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun','Jul','Aug','Sep', 'Oct', 'Nov','Dec'];
    var year = dateObj.getFullYear().toString();
    var month = dateObj.getMonth().toString();
    var day = dateObj.getDate().toString();
    this.formatdate = day+"-"+monthName[month]+"-"+year;
    this.today = this.formatdate;
    this.hSelisih();
  }
   public event = {
    month: '1990-02-19'
  }
  hSelisih(){
    var skr = new Date(this.today);
    var lhr = new Date(this.event.month);
    
    var diff = Math.abs(skr.getTime() - lhr.getTime());
  var umur  = Math.ceil(diff / (1000 * 3600 * 24)); 

  this.tahun = 0;
  this.bulan = 0;
  this.hari  = 0;
  if(umur >= 365 ){
    this.tahun = Math.floor(umur/365);
    var sisa = umur%365;
    if(sisa >=30 && sisa < 365 ){
      this.bulan = Math.floor(sisa/30) ;
      sisa = sisa%30;
    }else if(sisa >=1 && sisa < 30){
      this.hari = sisa;
    }
  }
  if(umur < 365 && umur >= 30 ){
    this.bulan = Math.floor(umur/30);
    sisa = umur %30;
    if(sisa >= 1 && sisa < 30 ){
      this.hari = sisa;
    }
  } 
  if(umur >= 1 && umur < 30){
    this.hari = umur;
  }
  }
}
