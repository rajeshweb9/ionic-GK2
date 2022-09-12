import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./onboarding/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./infra/pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'ventures',
    loadChildren: () => import('./infra/pages/ventures/ventures.module').then( m => m.VenturesPageModule)
  },
  {
    path: 'layout-view',
    loadChildren: () => import('./infra/pages/layout-view/layout-view.module').then( m => m.LayoutViewPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./onboarding/pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },

  {
    path: 'accountform',
    loadChildren: () => import('./onboarding/pages/accountform/accountform.module').then( m => m.AccountformPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
