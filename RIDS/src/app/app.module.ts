import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeaponComponent } from './weapon/weapon.component';
import { SuspectComponent } from './suspect/suspect.component';
import { PlaceComponent } from './place/place.component';
import { GameComponent } from './game/game.component';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {AuthService} from './auth.service';
import {GameService} from './game.service';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { MapComponent } from './map/map.component';
import { CityComponent } from './city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeaponComponent,
    SuspectComponent,
    PlaceComponent,
    GameComponent,
    ProfileComponent,
    CityComponent,
    MapComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AUTH_PROVIDERS, AuthService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
