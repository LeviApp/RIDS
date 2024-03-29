import { Component, OnInit, OnChanges } from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit, OnChanges {
  public city = [];
  public testCities = ['Denver', 'Cripple Creek', 'Fort Morgan', 'Louisville', 'Idaho Springs'];
  public places = [];
  public witnesses = [];
  public responses = [];
  public index = 0;
  public theChosen;
  public question = 0;
  public smallest;
  constructor(public _gameService: GameService) { }

  ngOnInit() {

    this.theChosen = JSON.parse(localStorage.getItem('theChosen'))
    console.log(localStorage.getItem('theChosen'), 'this is storage')
    
    setTimeout(() => {
      console.log(this.theChosen, 'this is in setTimeout chosen')
    this._gameService.getCities(1).subscribe(data => {
      this.city = [data]
      
    }
      )
    }, 2000)


      console.log(this.city, 'this is the city after')

      setTimeout(() => {
        this._gameService.getPlaces().subscribe(data => {
          this.places = data.filter(item => item.city === this.city[0].id)
          console.log(this.places,'this is the places array inside setTimeout')
    
        }
          )

      }, 3000)

      setTimeout(() => {
        this._gameService.getWitnesses().subscribe(data => {
          this.witnesses = data.filter(item => item.place >= this.places[0].id && item.place <= this.places[0].id + 5).sort((x,y) => x.place - y.place)
          this.smallest = data.filter(item => item.place >= this.places[0].id && item.place <= this.places[0].id + 5).sort((x,y) => x.id - y.id)[0].id
          console.log(this.witnesses,'this is the witnesses array inside setTimeout')
        }
          )

      }, 4000)

      setTimeout(() => {
        this._gameService.getResponses().subscribe(data => {
          this.responses = data.filter(item => item.witness >= this.smallest && item.id <= this.smallest + 5)
          console.log(this.responses,'this is the responses array inside setTimeout')

        }
          )

      }, 6000)

      
  }

  ngOnChanges() {
    
  }

  move(val) {
    if (val === 0) {
      if (this.index === 0) {
        this.index = this.places.length - 1
      }
  
      else {
        this.index--
      }
    }

    else {
      if (this.index === this.places.length - 1) {
        this.index = 0
      }
  
      else {
        this.index++
      }
    }
    this.question = 0
  }

  questioning(val) {
      this.question = val
  }

}


