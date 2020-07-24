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
      let map;
      let horse;
      let tent;
      let train;
      let fort;
      let sheriff;
      let creek;
      s.preload = () => {
        horse = s.loadImage('https://image.flaticon.com/icons/png/512/36/36108.png')
        tent = s.loadImage('https://cdn0.iconfinder.com/data/icons/map-locations-glyph-1/100/tent-camping-location-map-place-spot-position-512.png')
        train = s.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Train_Icon_bw.svg/1200px-Train_Icon_bw.svg.png')
        fort = s.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Font_Awesome_5_brands_fort-awesome.svg/1024px-Font_Awesome_5_brands_fort-awesome.svg.png')
        sheriff = s.loadImage('https://image.flaticon.com/icons/svg/107/107703.svg')
        creek = s.loadImage('https://image.flaticon.com/icons/svg/2899/2899933.svg')
        
      }

      s.setup = () => {
        map = s.createCanvas(600, 600);
        map.parent('map-contain');
        btns = s.selectAll('.btn')
        characterOptions = s.select('#field')
        proof = s.select('#pro')
        for (let i = 0;i<btns.length;i++) {
          btns[i].mousePressed(mapOpen)

        }
      };

      function mapOpen() {
        characterOptions.hide();
        proof.hide();
        map.show();
      }
   

      s.draw = () => {
        s.background(210, 180, 140);
        s.image(tent, 50, 250, 100, 100)
        s.image(train, 125, 50, 150, 150)
        s.image(horse, 275, 350, 75, 75)
        s.image(fort, 450, 50, 100, 100)
        s.image(sheriff, 250, 250, 100, 100)
        s.image(creek, 100, 450, 100, 100)

        if (x<100) {x=x+1}
        else {x=1}
        console.log(horse, 'this is the horse')

      };
      
    }

    let canvas = new p5(sketch);

  }
}