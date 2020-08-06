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
  public places = [];
  public witnesses = [];
  public index = 0
  constructor(private _gameService: GameService) { }

  ngOnInit() {
    this._gameService.getCities(1).subscribe(data => {
      this.city = [data]
      console.log(this.city,'this is the city array')
      
    }
      )

      console.log(this.city, 'this is the city after')

      setTimeout(() => {
        this._gameService.getPlaces().subscribe(data => {
          this.places = data.filter(item => item.city === this.city[0].id)
          console.log(this.places,'this is the places array inside setTimeout')
    
        }
          )

      }, 1000)

      setTimeout(() => {
        this._gameService.getWitnesses().subscribe(data => {
          this.witnesses = data.filter(item => item.place >= this.places[0].id && item.place <= this.places[0].id + 5)
          console.log(this.witnesses,'this is the witnesses array inside setTimeout')
    
        }
          )

      }, 1000)

      
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


