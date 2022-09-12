import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutViewPage } from './layout-view.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutViewPageRoutingModule {}
