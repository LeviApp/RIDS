import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service'
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public cities = [];
  constructor(private _gameService: GameService ) { }

  ngOnInit() {
  
    this._gameService.getCities().subscribe(data => this.cities = data)
    console.log(this.cities)
  }

}
