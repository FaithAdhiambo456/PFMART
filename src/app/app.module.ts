import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutComponent } from './dashboard/about/about.component';
import { ServicesComponent } from './dashboard/services/services.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { LoginComponent } from './dashboard/login/login.component';
import { PageNotFoundComponent } from './dashboard/page-not-found/page-not-found.component';
import { AuthInterceptorService } from './Pfmart Services/auth-interceptor.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
    
  ],
  providers: [
    provideClientHydration(),
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi: true},
    provideAnimationsAsync()  //the order in which we provide these interceptor services is the same order in which they will be executed
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
