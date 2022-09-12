import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountformPage } from './accountform.page';

const routes: Routes = [
  {
    path: '',
    component: AccountformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountformPageRoutingModule {}
