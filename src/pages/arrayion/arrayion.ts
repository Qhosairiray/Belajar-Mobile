import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ArrayionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-arrayion',
  templateUrl: 'arrayion.html',
})
export class ArrayionPage {
//datanya:String[];// untuk mendeklarasikan data Array satu dimensi
datanya:Array<any>;
tampil=true;
ada=true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.isi();// untuk memanggil fungsi
  }
  tmpl(){
    this.tampil=!this.tampil;
  }
  muncul(){
    this.ada=!this.ada;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ArrayionPage');
  }
  // isi(){ // fungsi yang di panggil
  //   this.datanya=[
  //   'hasori',
  //   'ipung',
  //   'amin',
  //   'noufal'
  //   ]
  // }
  isi(){ // fungsi Array object
    this.datanya=[
    {
      nama:'hosari dev',
      nilai:'97',
      prodi:'Teknik Informatika',
      jk:'Laki-laki'
    },
    {     
      nama:'Andinda',
      nilai:'70',
      prodi:'Teknik Informatika',
      jk:'Perempuan'
    },
    {
      nama:'Imam Hakiki',
      nilai:'47',
      prodi:'Teknik Informatika',
      jk:'Laki-laki'
    },
    {
      nama:'Wati',
      nilai:'35',
      prodi:'Teknik Informatika',
      jk:'Perempuan'
    }
    ];
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.isi();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.datanya = this.datanya.filter((item) => {
        return (item.nama.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
