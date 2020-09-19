import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {GameService} from '../game.service';
import {AuthService} from '../auth.service'
import { Router } from '@angular/router';

import * as p5 from 'p5';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit {
  public cities = [];
  public players = [];

  public map;
  @ViewChild('file') file;
  profileJson: object = null;
  private p5;
  constructor(private _gameService: GameService, public auth: AuthService, public router: Router ) { }


  ngOnInit() {

      this.auth.userProfile$.subscribe(
        profile => {
          console.log(profile, 'this is the prifile')
          this.profileJson = profile
          if (this.profileJson) {
            this._gameService.getPlayers(this.profileJson.sub.substr(6)).subscribe(data => this.players = data)
  
          }
          }
      );

    console.log(this.profileJson, 'this is prf json')

  }

  playerData(player) {
    localStorage.setItem("theChosen", JSON.stringify(player));
      // console.log(this._gameService._chosenPlayer, 'you have been chosen')
  }

  ngAfterViewInit() {
    this.map = document.getElementsByClassName('map')[0]
  }
}




