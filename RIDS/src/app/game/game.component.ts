import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';
import * as p5 from 'p5';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public cities = [];
  private p5;
  constructor(private _gameService: GameService ) { }

  ngOnInit() {
  
    this._gameService.getCities().subscribe(data => this.cities = data)
    console.log(this.cities)
    const sketch = (s) => {
      let x = 1;
      s.preload = () => {
        // preload code
      }

      s.setup = () => {
        s.createCanvas(400, 400);
      };

      s.draw = () => {
        s.background(255);
        s.rect(x, x, x, x);
        // if (x<100) {x=x+1}
        // else {x=1}
      };
    }

    let canvas = new p5(sketch);

  }
}




