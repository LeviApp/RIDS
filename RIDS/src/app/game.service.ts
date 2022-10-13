import { Injectable, ViewChild  } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {City, PostPlayer, Player, Place, Witness, Response} from './game'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  @ViewChild('nameI') nameI;
  @ViewChild('descriptionI') descriptionI;
  @ViewChild('qsI') qsI;
  @ViewChild('qpI') qpI;
  @ViewChild('qwI') qwI;
  @ViewChild('goodbyeI') goodbyeI;

  private _cityurl: string = 'https://reform-in-dust-storms.onrender.com/murderincolor/api/cities/';
  private _placeurl: string = 'https://reform-in-dust-storms.onrender.com/murderincolor/api/places/';
  private _witnessurl: string = 'https://reform-in-dust-storms.onrender.com/murderincolor/api/witnesses/';
  private _responseurl: string = 'https://reform-in-dust-storms.onrender.com/murderincolor/api/responses/';

  private _playerurl: string = 'https://reform-in-dust-storms.onrender.com/murderincolor/api/players/';
  private _chosenPlayer;
  constructor(private http: HttpClient) { }
  getCities(val): Observable<City[]> {
    console.log('city api fired')
    return this.http.get<City[]>(this._cityurl + val)

  }

  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this._placeurl)
  }

  getWitnesses(): Observable<Witness[]> {
    return this.http.get<Witness[]>(this._witnessurl)
  }

  getResponses(): Observable<Response[]> {
    return this.http.get<Response[]>(this._responseurl)
  }
  getPlayers(userID): Observable<Player[]> {
    let params_id = new HttpParams().set('userid', userID)
    return this.http.get<Player[]>(this._playerurl, { params: params_id})
  }
  addPlayer(playerD: PostPlayer) {
    return this.http.post(this._playerurl, playerD)
  }

  get getChosen(): object {
    console.log('this is the chosen data', this._chosenPlayer)
    return this._chosenPlayer
  }

  set setChosen(val: Observable<Player> ) {
   this._chosenPlayer = val
   console.log('this is the chosen data', this._chosenPlayer)

  }
}
