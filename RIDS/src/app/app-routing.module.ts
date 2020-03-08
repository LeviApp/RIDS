import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { PlaceComponent } from './place/place.component'
import { SuspectComponent } from './suspect/suspect.component'
import { WeaponComponent } from './weapon/weapon.component'

const routes: Routes = [
  {path: 'home-info', component: HomeComponent },
  {path: 'place-info', component: PlaceComponent },
  {path: 'suspect-info', component: SuspectComponent },
  {path: 'weapon-info', component: WeaponComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
