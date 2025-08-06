import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {AuthService} from '../auth.service'
import { PostPlayer, PlayerCharacter, SelectedCharacter } from '../game';
import {GameService} from '../game.service'

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
  playerRes: PlayerCharacter;
  defaultCharacters: object[] = [];
  selectedCharacter: SelectedCharacter = { name: '', description: '' };
  selectingCharacter: boolean = false;
  currentCity: string = "";
  currentPlace: string = "";


  constructor(public auth: AuthService, public _gameService: GameService) { }

  ngOnInit(): void {
      this._gameService.getPlayers("preset").subscribe(data => {
        this.defaultCharacters = data;
        this.selectedCharacter = this.playerCharacter.id !== 0 ? {
          name: this.playerCharacter.name,
          description:  this.playerCharacter.description,
        } : {
          name: data[0].name,
          description: data[0].description
        }
        
        this.selectingCharacter = this.playerCharacter.id === 0 ? true : false;
        console.log("TRUST", this.selectingCharacter)

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

    console.log("TRUST", this.playerCharacter)
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
      name: character.name,
      description: character.description,
    }
  }

  openSelectCharacterSection() {
    console.log("RUNNING THE SELECT!")
    this.selectingCharacter = true;
  }

  postCharacter(token) {
    this.selectingCharacter = false;
    this.playerCharacter.id = 1;

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
    this.currentCity = this.getCity(this.playerCharacter.city_id)
    this.currentPlace = this.getPlace(this.playerCharacter.place_id)
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
