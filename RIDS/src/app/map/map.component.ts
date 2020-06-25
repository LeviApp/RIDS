import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';
import {AuthService} from '../auth.service'

import * as p5 from 'p5';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public cities = [];
  public players = [];
  profileJson: object = null;
  private p5;
  constructor(private _gameService: GameService, public auth: AuthService ) { }

  ngOnInit() {

      this.auth.userProfile$.subscribe(
        profile => {this.profileJson = profile}
      );
  
    this._gameService.getCities().subscribe(data => this.cities = data)
    this._gameService.getPlayers('this.profileJson.sub.substr(6)').subscribe(data => this.players = data)

    console.log(this.profileJson, 'this is it')
    const sketch = (s) => {
      let x = 50;
      let btns;
      let characterOptions;
      let proof;

      s.preload = () => {
        // preload code
      
      }

      s.setup = () => {
        let map = s.createCanvas(400, 400);
        map.parent('char-contain');
        btns = s.selectAll('.btn')
        characterOptions = s.select('#field')
        proof = s.select('#pro')

        map.hide()

        for (let i = 0;i<btns.length;i++) {
          btns[i].mousePressed(() => {
            characterOptions.hide();
            proof.hide();
            map.show();


          })

        }
      };

   

      s.draw = () => {
        s.background(0);
        s.rect(x, x, x, x);
        if (x<100) {x=x+1}
        else {x=1}
        console.log(characterOptions)
      };
      
    }

    let canvas = new p5(sketch);

  }
}