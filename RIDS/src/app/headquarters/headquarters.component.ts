import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { GameService } from '../game.service';
import { PlayerCharacter } from '../game';

@Component({
  selector: 'app-headquarters',
  templateUrl: './headquarters.component.html',
  styleUrls: ['./headquarters.component.scss']
})
export class HeadquartersComponent implements OnInit {

  profileJson: object = null;
  playerCharacter: PlayerCharacter = {
    id: 0,
    user_id: '',
    rank: '',
    name: '',
    description: '',
    question_suspect: '',
    question_place: '',
    question_weapon: '',
    goodbye: '',
    city_id: 1,
    place_id: 1,
  };
  cases: object[] = [];


  constructor(public auth: AuthService, public _gameService: GameService) { }

  ngOnInit(): void {
    this.auth.userProfile$.subscribe(
      profile => {
        this.profileJson = profile
        const userId = this.profileJson["sub"].split("|")[1];
        if (this.profileJson) {
          this._gameService.getPlayerCase(userId).subscribe(data => {
            console.log("case data is ", data)
            this.cases = data;
          })
          this._gameService.getPlayers(userId).subscribe(data => {
            console.log("data is in HEADQUARTERS", data)
            if (data.length) {
              this.playerCharacter = data[0];
            }
          }
            )
        }
        }
    );
  }

  addCase() {
    const userId = this.profileJson["sub"].split("|")[1];
    this._gameService.addCase(userId, 0).subscribe((data) => {
      console.log("case added!", {data})

    })
  }

}
