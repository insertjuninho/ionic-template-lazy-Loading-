import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Fotos } from '../../model/foto';

/**
 * Generated class for the FotoDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foto-detalhes',
  templateUrl: 'foto-detalhes.html',
})
export class FotoDetalhesPage {
  fotos : Fotos;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fotos = this.navParams.get('fotos');
   
  }

 
}
