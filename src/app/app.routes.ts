import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SobreNosotrosPageComponent } from './pages/sobre-nosotros-page/sobre-nosotros-page.component';

export const routes: Routes = [
  // Paginas publicas
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'about-us',
    component: SobreNosotrosPageComponent
  },

  //paginas privadas con autenticacion

  //redireccionamiento si el url no existe
  {
    path: '**',
    redirectTo: '',
  },
];
