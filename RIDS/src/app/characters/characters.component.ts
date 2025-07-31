import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {AuthService} from '../auth.service'
import { PostPlayer, Player } from '../game';
import {GameService} from '../game.service'

export interface Character {
  rank: string;
  name: string;
  description: string;
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
  selectedCharacter: Character = { rank: '', name: '', description: '' };
  selectingCharacter: boolean = false;


  constructor(public auth: AuthService, public _gameService: GameService) { }

  ngOnInit(): void {
      this._gameService.getPlayers("preset").subscribe(data => {
        this.defaultCharacters = data;
        this.selectedCharacter = Object.keys(this.playerCharacter).length !== 0 ? {
          rank: this.playerCharacter.rank,
          name: this.playerCharacter.name,
          description:  this.playerCharacter.description
        } : {
          rank: data[0].rank,
          name: data[0].name,
          description: data[0].description
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
      rank: character.rank,
      name: character.name,
      description: character.description
    }
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

}
