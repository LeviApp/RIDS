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
  constructor(private _gameService: GameService, public auth: AuthService) { }

  ngOnInit() {

      this.auth.userProfile$.subscribe(
        profile => {this.profileJson = profile}
      );
  
    this._gameService.getCities().subscribe(data => this.cities = data)
    this._gameService.getPlayers('this.profileJson.sub.substr(6)').subscribe(data => this.players = data)

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
      let horseObj;
      let sheriffObj;
      let tentObj;
      let creekObj;
      let fortObj;
      let trainObj;

      let mapObj = class {
        xs: number;
        ys: number;
        width: number;
        height: number;
        constructor(xs,ys, width, height) {
          this.xs = xs;
          this.ys = ys;
          this.width = width;
          this.height = height;
        }

        display(val) {
          s.image(val, this.xs, this.ys, this.width, this.height)
        }

        ride(xer, yer) {
          if (xer < this.xs && yer < this.ys) {
            this.xs--;
            this.ys--;
          }
          else if (xer < this.xs && yer > this.ys) {
            this.xs--;
            this.ys++;
          }
          else if (xer > this.xs && yer < this.ys) {
            this.xs++;
            this.ys--;
          }
          else if (xer > this.xs && yer > this.ys){
            this.xs++;
            this.ys++;
          }
        }
      }
      s.preload = () => {
        horse = s.loadImage('https://image.flaticon.com/icons/svg/375/375336.svg')
        tent = s.loadImage('https://cdn0.iconfinder.com/data/icons/map-locations-glyph-1/100/tent-camping-location-map-place-spot-position-512.png')
        train = s.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Train_Icon_bw.svg/1200px-Train_Icon_bw.svg.png')
        fort = s.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Font_Awesome_5_brands_fort-awesome.svg/1024px-Font_Awesome_5_brands_fort-awesome.svg.png')
        sheriff = s.loadImage('https://image.flaticon.com/icons/svg/107/107703.svg')
        creek = s.loadImage('https://image.flaticon.com/icons/svg/2899/2899933.svg')
        console.log(horse, 'this is a horse')
        horseObj = new mapObj(270,270, 50, 50)
        sheriffObj = new mapObj(250,250, 100, 100)
        tentObj = new mapObj(50,250, 100, 100)
        trainObj = new mapObj(125,50, 150, 150)
        creekObj = new mapObj(100,450, 100, 100)
        fortObj = new mapObj(450,50, 100, 100)

      }

      s.setup = () => {
        s.colorMode('RGB');

        map = s.createCanvas(600, 600);
        map.parent('char-contain');
        btns = s.selectAll('.btn');
        characterOptions = s.select('#field')
        proof = s.select('#pro')

        for (let i = 0;i<btns.length;i++) {
          btns[i].mousePressed(mapOpen)

        }
      };

      s.mousePressed = () => {
          console.log('It has been clicked')
      }

      function mapOpen() {
        characterOptions.hide();
        proof.hide();
        map.show();
      }
   
      function moveCities() {
        
      }



      s.draw = () => {
        s.background(210, 180, 140);
        s.stroke(255)
        s.strokeWeight(10)
        s.line(100,300,200,125)
        s.stroke(255)
        s.strokeWeight(10)
        s.line(100,300,300,300)
        s.stroke(255)
        s.strokeWeight(10)
        s.line(300,300,200, 125)
        s.stroke(255)
        s.strokeWeight(10)
        s.line(300,300,150, 460)
        s.stroke(255)
        s.strokeWeight(10)
        s.line(100,345,150, 460)
        s.stroke(255)
        s.strokeWeight(10)
        s.line(300,300,480, 140)
        s.stroke(255)
        s.strokeWeight(10)
        s.line(260,140,480, 140)
        sheriffObj.display(sheriff)
        tentObj.display(tent)
        trainObj.display(train)
        fortObj.display(fort)
        creekObj.display(creek)
        horseObj.display(horse)
        //   horseObj.ride(95, 600)

        // setTimeout(function(){
        //   horseObj.ride(50, 250)
        // }, 4000);
        

        s.noStroke()
        s.textSize(20);
        s.text(`Denver`, 265, 375);
        s.noStroke()
        s.textSize(20);
        s.text(`Idaho Springs`, 35, 375);
        s.noStroke()
        s.textSize(20);
        s.text(`Louisville`, 160, 180);
        s.noStroke()
        s.textSize(20);
        s.text(`Fort Morgan`, 445, 175);
        s.noStroke()
        s.textSize(20);
        s.text(`Cripple Creek`, 100, 575);
        if (x<100) {x=x+1}
        else {x=1}

      };
      
    }

    let canvas = new p5(sketch);

  }
}