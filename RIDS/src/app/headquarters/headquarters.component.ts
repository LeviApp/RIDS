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
  playerCharacter: object = {};
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
            this.playerCharacter = data[0];
          }
            )
        }
        }
    );
  }

  addCase() {
    const userId = this.profileJson["sub"].split("|")[1];
    this._gameService.addCase(userId).subscribe((data) => {
      console.log("case added!", {data})

    })
  }

}
