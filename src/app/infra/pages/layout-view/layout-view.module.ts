import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutViewPageRoutingModule } from './layout-view-routing.module';

import { LayoutViewPage } from './layout-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutViewPageRoutingModule
  ],
  declarations: [LayoutViewPage]
})
export class LayoutViewPageModule {}
