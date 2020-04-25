import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {City} from './game'
import {Observable} from 'rxjs/Observable'
@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _url: string = 'https://reforminduststorms.herokuapp.com/murderincolor/api/cities/'
  constructor(private http: HttpClient) { }
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this._url)
  }
}
