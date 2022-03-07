import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROOT_ROUTES } from './shared/models/constants';
import { HomePageComponent } from './views/home-page/home-page.component';

const routes: Routes = [
  {
    path: ROOT_ROUTES.home,
    pathMatch: 'full',
    component: HomePageComponent
  },
  {
    path: ROOT_ROUTES.login,
    loadChildren: () => import('./views/login-page/login-page.module').then(
      (m) => m.LoginPageModule)
  },
  {
    path: '**',
    redirectTo: ROOT_ROUTES.home,
    pathMatch: 'full'
  }
] as Routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
