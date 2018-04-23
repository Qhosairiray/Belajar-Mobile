import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PindahPage } from '../pindah/pindah';
import { HalduaPage } from '../haldua/haldua';
import { ArrayionPage } from '../arrayion/arrayion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  kepindah(){
    this.navCtrl.push(PindahPage);
  }
  haldua(){
    this.navCtrl.push(HalduaPage);
  }
  array(){
    this.navCtrl.push(ArrayionPage);
  }

}
