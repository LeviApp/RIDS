import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../game.service'

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {

  constructor(public _gameService: GameService) { }

    @Input() profileJson = null;
  

  ngOnInit(): void {
  }

  createCaseFile() {
    const userId = this.profileJson["sub"].split("|")[1];
    this._gameService.addCase(userId, 0).subscribe((data) => {
      console.log("case added!", {data})

    })
  }

}
