import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './Components/contact/contact.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';
import { MessagesComponent } from './Components/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
