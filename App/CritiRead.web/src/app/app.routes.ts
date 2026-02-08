import { Routes } from '@angular/router';
import { TemplateComponent } from './pages/template.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BookComponent } from './pages/book/book.component';
import { AuthorComponent } from './pages/author/author.component';

export const routes: Routes = [
  {
    path: '',
    component: TemplateComponent, 
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'book', component: BookComponent },
      { path: 'author', component: AuthorComponent }
    ]
  }
];