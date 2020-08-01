import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  public city = [];
  public testCities = ['Denver', 'Cripple Creek', 'Fort Morgan', 'Louisville', 'Idaho Springs'];

  constructor(private _gameService: GameService) { }

  ngOnInit() {
    this._gameService.getCities(5).subscribe(data => {
      this.city = [data]
      console.log(this.city,'this is the city array')

    }
      )
  }

}
