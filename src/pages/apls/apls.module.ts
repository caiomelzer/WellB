import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AplsPage } from './apls';

@NgModule({
  declarations: [
    AplsPage,
  ],
  imports: [
    IonicPageModule.forChild(AplsPage),
    TranslateModule.forChild()
  ],
  exports: [
    AplsPage
  ]
})
export class AplsPageModule { }
