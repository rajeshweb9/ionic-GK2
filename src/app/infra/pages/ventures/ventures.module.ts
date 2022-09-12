import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenturesPageRoutingModule } from './ventures-routing.module';

import { VenturesPage } from './ventures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenturesPageRoutingModule
  ],
  declarations: [VenturesPage]
})
export class VenturesPageModule {}
