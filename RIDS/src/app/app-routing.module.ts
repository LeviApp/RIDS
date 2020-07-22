import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { PlaceComponent } from './place/place.component'
import { SuspectComponent } from './suspect/suspect.component'
import { WeaponComponent } from './weapon/weapon.component'
import { GameComponent } from './game/game.component'
import { MapComponent } from './map/map.component'
import { SpaceComponent } from './space/space.component'

const routes: Routes = [
  {path: '', redirectTo: 'overview', pathMatch: 'full' },
  {path: 'overview', component: HomeComponent },
  {path: 'place-info', component: PlaceComponent },
  {path: 'suspect-info', component: SuspectComponent },
  {path: 'weapon-info', component: WeaponComponent },
  {path: 'game', component: GameComponent },
  {path: 'map', component: SpaceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
