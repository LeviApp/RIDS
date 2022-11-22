import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
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
import { MapComponent } from './map/map.component';
import { CityComponent } from './city/city.component';
import { InterviewComponent } from './interview/interview.component';
import { CharactersComponent } from './characters/characters.component';
import { CaseComponent } from './case/case.component';
import { ChardetailsComponent } from './chardetails/chardetails.component';
import { LocaleComponent } from './locale/locale.component';
import { HeadquartersComponent } from './headquarters/headquarters.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeaponComponent,
    SuspectComponent,
    PlaceComponent,
    GameComponent,
    CityComponent,
    MapComponent,
    InterviewComponent,
    CharactersComponent,
    CaseComponent,
    ChardetailsComponent,
    LocaleComponent,
    HeadquartersComponent,
    NavComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AUTH_PROVIDERS, AuthService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
