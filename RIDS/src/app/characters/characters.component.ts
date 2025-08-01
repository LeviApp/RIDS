import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {AuthService} from '../auth.service'
import { PostPlayer, Player } from '../game';
import {GameService} from '../game.service'

export interface Character {
  rank: string;
  name: string;
  description: string;
  city_id: number;
  place_id: number;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, AfterViewInit {

  profileJson: object = null;
  @Input() playerCharacter = null;

  @ViewChild('char') character;
  @ViewChild('boy') boy;
  @ViewChild('girl') girl;
  @ViewChild('nameI') nameI;
  @ViewChild('descriptionI') descriptionI;
  @ViewChild('qsI') qsI;
  @ViewChild('qpI') qpI;
  @ViewChild('qwI') qwI;
  @ViewChild('goodbyeI') goodbyeI;
  name: string = '';
  description: string = '';
  playerReq: PostPlayer;
  playerRes: Player;
  defaultCharacters: object[] = [];
  selectedCharacter: Character = { rank: '', name: '', description: '', city_id: 1, place_id: 1 };
  selectingCharacter: boolean = false;
  currentCity: string = "";
  currentPlace: string = "";


  constructor(public auth: AuthService, public _gameService: GameService) { }

  ngOnInit(): void {
      this._gameService.getPlayers("preset").subscribe(data => {
        this.defaultCharacters = data;
        this.selectedCharacter = Object.keys(this.playerCharacter).length !== 0 ? {
          rank: this.playerCharacter.rank,
          name: this.playerCharacter.name,
          description:  this.playerCharacter.description,
          city_id:  this.playerCharacter.city_id,
          place_id:  this.playerCharacter.place_id
        } : {
          rank: data[0].rank,
          name: data[0].name,
          description: data[0].description,
          city_id:   data[0].city_id,
          place_id:  data[0].place_id
        }
        
        this.selectingCharacter = Object.keys(this.playerCharacter).length === 0 ? true : false;
      }
        )

  }

  ngAfterViewInit(): void {
    this.name = "Jim Carson"
    this.description = "My name is Carson, Jim Carson. I am a tall, young man with hair as black as night. I can handle myself in a fight, and can outdraw any outlaw. I wear the badge proudly as I seek to bring reform in the middle of a barren dust storm called the West, the Wild West."
    this.boy.nativeElement.style.backgroundColor = "darkorange"
    this.boy.nativeElement.style.color = "white"
    this.girl.nativeElement.style.backgroundColor = "white"
    this.girl.nativeElement.style.color = "orange"
  }

  who(gender) {
    if (gender === "boy") {
      this.name = "Jim Carson"
      this.description = "My name is Carson, Jim Carson. I am a tall, young man with hair as black as night. I can handle myself in a fight, and can outdraw any outlaw. I wear the badge proudly as I seek to bring reform in the middle of a barren dust storm called the West, the Wild West."
      this.boy.nativeElement.style.backgroundColor = "darkorange"
      this.boy.nativeElement.style.color = "white"
      this.girl.nativeElement.style.backgroundColor = "white"
      this.girl.nativeElement.style.color = "orange"
      console.log(this.profileJson)
    }
    else {
      this.name = "Melanie Brooks"
      this.description = "My name is Brooks, Melanie Brooks. My long, brown hair flashes in the sun. I am tougher than the toughest of cowboys. Many forget that I know how to use a gun. I wear the badge proudly as I seek to bring reform in the middle of a barren dust storm called the West, the Wild West."
      this.girl.nativeElement.style.backgroundColor = "darkorange"
      this.girl.nativeElement.style.color = "white"
      this.boy.nativeElement.style.backgroundColor = "white"
      this.boy.nativeElement.style.color = "orange"
    }
  }

  characterImageUrl(characterName): string {
    const cleanedName = characterName.replace(/ /g, ''); // Remove all spaces
    return `assets/img/caricatures/${cleanedName}.png`;
  }

  selectCharacter(character) {
    this.selectedCharacter = {
      rank: Object.keys(this.playerCharacter).length !== 0 ? this.playerCharacter.rank : character.rank,
      name: character.name,
      description: character.description,
      city_id: Object.keys(this.playerCharacter).length !== 0 ? this.playerCharacter.city_id : character.city_id,
      place_id: Object.keys(this.playerCharacter).length !== 0 ? this.playerCharacter.place_id : character.place_id
    }
    this.currentCity = this.getCity(character.city_id)
    this.currentPlace = this.getPlace(character.place_id)
  }

  openSelectCharacterSection() {
    console.log("RUNNING THE SELECT!")
    this.selectingCharacter = true;
  }

  postCharacter(token) {
    this.selectingCharacter = false;
    // this.playerReq = new PostPlayer();
    // this.playerReq.user_id = token;
    // this.playerReq.rank = "Deputy";
    // this.playerReq.name = this.nameI.nativeElement.value;
    // this.playerReq.description = this.descriptionI.nativeElement.value;
    // this.playerReq.question_suspect = this.qsI.nativeElement.value;
    // this.playerReq.question_place = this.qpI.nativeElement.value;
    // this.playerReq.question_weapon = this.qwI.nativeElement.value;
    // this.playerReq.goodbye = this.goodbyeI.nativeElement.value;
    // this.playerReq.place_id = 1;
    // this.playerReq.city_id = 1;
    // this._gameService.addPlayer(this.playerReq).subscribe((res: Player) => {
    //   this.playerRes = res;
    //   this.playerCharacter = [...this.playerCharacter, this.playerRes]
    // })
  }
  addCharacter() {
    console.log("open the char", this.character.nativeElement.style.display)
    if (!this.character.nativeElement.style.display) {
      this.character.nativeElement.style.display = "flex"
      console.log("good")
    }
    else {
      this.character.nativeElement.style.display = "none";
      console.log("bad")

    }
}

getCity(id) {
  this._gameService.getCity(id).subscribe(data => {
    this.currentCity = data.name
  })
  return "";
}

getPlace(id) {
  this._gameService.getPlace(id).subscribe(data => {
    this.currentPlace = data.name
  })
  return "";
}

}
