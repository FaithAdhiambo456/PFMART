import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import path from 'path';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutComponent } from './dashboard/about/about.component';
import { ServicesComponent } from './dashboard/services/services.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { LoginComponent } from './dashboard/login/login.component';
import { PageNotFoundComponent } from './dashboard/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
{path: 'registration', component: RegistrationComponent},
{path: 'home', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'services', component: ServicesComponent},
{path: 'contact', component: ContactComponent},
{path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
