import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninFeedbackComponent } from './components/auth/signin-feedback/signin-feedback.component';
import { SigninComponent } from './components/auth/signin/signin.component';


const routes: Routes = [
  { path: 'auth/signin', component: SigninComponent},
  { path: 'auth/logged', component: SigninFeedbackComponent},
  { path: '', redirectTo: 'auth/signin', pathMatch: 'full'}, 
  { path: '**', redirectTo: 'auth/signin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
