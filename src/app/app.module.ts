import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SigninFeedbackComponent } from './components/auth/signin-feedback/signin-feedback.component';
import { AuthService } from './services/auth.service';
import { SeoMetatagsService } from './services/seo-metatags.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SigninFeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    SeoMetatagsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }