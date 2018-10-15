import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FotoDetalhesPage } from './foto-detalhes';

@NgModule({
  declarations: [
    FotoDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(FotoDetalhesPage),
  ],
})
export class FotoDetalhesPageModule {}
