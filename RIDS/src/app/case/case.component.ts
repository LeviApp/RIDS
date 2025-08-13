import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { GameService } from '../game.service'
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import { caseOptions } from '../game'
@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit, AfterViewInit {

  constructor(public _gameService: GameService) { }

    @Input() profileJson = null;
    @Input() playerCharacter = null;
    @Input() case = null;

    caseFile: any = {};

    caseForm: FormGroup;

    caseOptions: any = caseOptions;



  ngOnInit(): void {
    this.caseForm = new FormGroup({
      'name': new FormControl('--------', [Validators.required]),
      'gender': new FormControl('--------', [Validators.required]),
      'race': new FormControl('--------', [Validators.required]),
      'height': new FormControl('--------', [Validators.required]),
      'age': new FormControl('--------', [Validators.required]),
      'weight': new FormControl('--------', [Validators.required]),
      'hair_color': new FormControl('--------', [Validators.required]),
      'face_feature': new FormControl('--------', [Validators.required]),
      'unique_feature': new FormControl('--------', [Validators.required]),
      'crime_place': new FormControl('--------', [Validators.required]),
      'weapon': new FormControl('--------', [Validators.required]),
      'notebook': new FormControl('--------', [Validators.required]),
    });
  }

  ngAfterViewInit(): void {
  }

  createCaseFile() {
    const userId = this.profileJson["sub"].split("|")[1];
    this._gameService.addCase(userId, 0).subscribe((data) => {
      console.log("case added!", {data})
    })
  }

  saveCaseDetails() {
        // Check if the form is valid before logging
        if (this.caseForm.valid) {
          console.log("CASE FILE:", this.caseForm.value);
        } else {
          console.log('Form is invalid.');
        }
  }




}
