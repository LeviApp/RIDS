import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-headquarters',
  templateUrl: './headquarters.component.html',
  styleUrls: ['./headquarters.component.scss']
})
export class HeadquartersComponent implements OnInit {

  profileJson: object = null;
  characters: object[] = [];
  chosenCharacter: object = {};

  constructor(public auth: AuthService, public _gameService: GameService) { }

  ngOnInit(): void {
    this.auth.userProfile$.subscribe(
      profile => {
        console.log(profile, 'this is the prifile')
        this.profileJson = profile
        if (this.profileJson) {
          this._gameService.getPlayers(this.profileJson["sub"].substr(6)).subscribe(data => {
            console.log("data is in HEADQUARTERS", data)
            this.characters = data;
            this.chosenCharacter = data[0];
          }
            )
        }
        }
    );
  }

}
