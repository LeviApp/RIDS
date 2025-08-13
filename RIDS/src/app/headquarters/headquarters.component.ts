import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { GameService } from '../game.service';
import { of } from 'rxjs'; // Don't forget to import 'of'
import { filter, tap, switchMap, catchError, } from 'rxjs/operators';
import { PlayerCharacter } from '../game';
import { forkJoin } from 'rxjs';

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
  case: object = {};


  constructor(public auth: AuthService, public _gameService: GameService) { }

  ngOnInit(): void {
    this.auth.userProfile$.pipe(
      // 1. Ensure the 'profile' is not null or undefined
      filter(profile => !!profile),
      
      // 2. Use 'tap' for side effects, like logging and setting component properties
      tap(profile => {
        this.profileJson = profile;
        console.log({ profile });
      }),
      
      // 3. Use 'switchMap' to switch from the profile observable to the game service observables
      //    'switchMap' cancels any previous in-flight requests, which is useful for rapid changes
      switchMap(profile => {
        const userId = profile['sub'].split('|')[1];
        
        // Combine multiple observables in parallel to improve efficiency
        return forkJoin({
          playerCase: this._gameService.getPlayerCase(userId),
          playerCharacter: this._gameService.getPlayers(userId)
        });
      }),
      
      // 4. Use 'catchError' to handle any potential errors in the chain gracefully
      catchError(err => {
        console.error('Error fetching game data:', err);
        // Return a new observable to prevent the stream from completing
        return of(null); 
      })
      
    ).subscribe(results => {
      // 5. Subscribe to the final result of the combined observables
      if (results) {
        console.log("Combined results are:", results);
        this.case = results.playerCase[0];
        
        if (results.playerCharacter.length) {
          this.playerCharacter = results.playerCharacter[0];
        }
      }
    });
  }

  addCase() {
    const userId = this.profileJson["sub"].split("|")[1];
    this._gameService.addCase(userId, 0).subscribe((data) => {
      console.log("case added!", {data})

    })
  }

}
