import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing'; 
import { AppComponent } from './app.component'; 
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component'; 
import { HomeModule } from './home/home.module';
import { SamplesModule } from './samples/samples.module';
import { ContactComponent } from './contact/contact.component';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { HttpClientModule } from '@angular/common/http'; 
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent, 
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent 
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    SamplesModule,
    HttpClientModule,
    ComponentsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
