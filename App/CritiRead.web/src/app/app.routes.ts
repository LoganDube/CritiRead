import { Routes } from '@angular/router';
import { MainTemplateComponent } from './pages/templates/main-template.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginContainerComponent } from './pages/auth/login-container.component';
import { SignupContainerComponent } from './pages/auth/signup-container.component';
import { BooksComponent } from './pages/books/books.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { ReadersComponent } from './pages/readers/readers.component';
import { AuthTemplateComponent } from './pages/templates/auth-template.component';
import { ForgotPwdContainerComponent } from './pages/auth/forgot-pwd-container.component';

export const routes: Routes = [
  {
    path: '',
    component: MainTemplateComponent, // use template component in all of the components
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'books', component: BooksComponent },
      { path: 'authors', component: AuthorsComponent },
      { path: 'readers', component: ReadersComponent }
    ]
  },
  {
  path: 'auth',
  component: AuthTemplateComponent,
  children: [
  { path: 'login', component: LoginContainerComponent },
  { path: 'signup', component: SignupContainerComponent },
  { path: 'forgot-password', component: ForgotPwdContainerComponent }
  ]
  }
];