import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Profile } from './profile/profile';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'profile/:userName',
    component: Profile,
  },
  {
    path: '**',
    // component: NotFound,
    redirectTo: '',
  },
];
