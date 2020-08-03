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
  public places = []
  public index = 0
  constructor(private _gameService: GameService) { }

  ngOnInit() {
    this._gameService.getCities(1).subscribe(data => {
      this.city = [data]
      console.log(this.city,'this is the city array')

    }
      )

      console.log(this.city, 'this is the city after')

      this._gameService.getPlaces().subscribe(data => {
        this.places = data.filter(item => item.city === 1)
        console.log(this.places,'this is the places array')
  
      }
        )
  }

  move() {
    console.log(this.index)
    if (this.index === this.places.length) {
      this.index = 0
    }

    else {
      this.index++
    }
  }

}


