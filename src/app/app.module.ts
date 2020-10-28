import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { PaisComponent } from './core/pais/pais.component';
import { CardSpotifyComponent } from './shared/components/card-spotify/card-spotify.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaisComponent,
    CardSpotifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
