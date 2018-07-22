import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component'; 
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { SamplesComponent } from './samples/samples.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes =[
    { path: 'home', component: HomeComponent },
    { path: 'samples', component: SamplesComponent },
    { path: 'user-profile',     component: ProfileComponent }, 
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons', component: NucleoiconsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
