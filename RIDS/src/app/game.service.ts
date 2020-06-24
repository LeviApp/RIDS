import { Injectable, ViewChild  } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {City, PostPlayer, Player} from './game'
import {Observable} from 'rxjs/Observable'
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

  private _cityurl: string = 'https://reforminduststorms.herokuapp.com/murderincolor/api/cities/';
  private _playerurl: string = 'https://reforminduststorms.herokuapp.com/murderincolor/api/players/';
  constructor(private http: HttpClient) { }
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this._cityurl)
  }
  getPlayers(userID): Observable<Player[]> {
    let params_id = new HttpParams().set('user_id', userID)
    return this.http.get<Player[]>(this._playerurl, { params: params_id})
  }
  addPlayer(playerD: PostPlayer) {
    return this.http.post(this._playerurl, playerD)
  }
}
