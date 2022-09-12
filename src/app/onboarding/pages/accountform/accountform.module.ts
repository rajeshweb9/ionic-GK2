import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccountformPageRoutingModule } from './accountform-routing.module';
import { AccountformPage } from './accountform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountformPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AccountformPage]
})
export class AccountformPageModule {}
