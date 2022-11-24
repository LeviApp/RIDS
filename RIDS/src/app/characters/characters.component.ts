import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {AuthService} from '../auth.service'
import { PostPlayer, Player } from '../game';
import {GameService} from '../game.service'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  profileJson: object = null;
  @Input() characters = null;

  chosenCharacter: object = {};
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

  constructor(public auth: AuthService, public _gameService: GameService) { }

  ngOnInit(): void {
    // this.auth.userProfile$.subscribe(
    //   profile => {
    //     console.log(profile, 'this is the prifile')
    //     this.profileJson = profile
    //     if (this.profileJson) {
    //       this._gameService.getPlayers(this.profileJson["sub"].substr(6)).subscribe(data => {
    //         console.log("data is ", data)
    //         this.characters = data;
    //         this.chosenCharacter = data[0];
    //       }
    //         )
    //     }
    //     }
    // );
  }

  who(gender) {
    if (gender === "boy") {
      this.name = "Jim Carson"
      this.description = "My name is Carson, Jim Carson. I am a tall, young man with hair as black as night. I can handle myself in a fight, and can outdraw any outlaw. I wear the badge proudly as I seek to bring reform in the middle of a barren dust storm called the West, the Wild West."
      this.boy.nativeElement.style.backgroundColor = "darkorange"
      this.boy.nativeElement.style.color = "white"
      this.boy.nativeElement.style.border = "2px solid white"
      this.girl.nativeElement.style.backgroundColor = "white"
      this.girl.nativeElement.style.color = "orange"
      this.girl.nativeElement.style.border = "2px solid black"
      console.log(this.profileJson)
    }
    else {
      this.name = "Melanie Brooks"
      this.description = "My name is Brooks, Melanie Brooks. My long, brown hair flashes in the sun. I am tougher than the toughest of cowboys. Many forget that I know how to use a gun. I wear the badge proudly as I seek to bring reform in the middle of a barren dust storm called the West, the Wild West."
      this.girl.nativeElement.style.backgroundColor = "darkorange"
      this.girl.nativeElement.style.color = "white"
      this.girl.nativeElement.style.border = "2px solid white"
      this.boy.nativeElement.style.backgroundColor = "white"
      this.boy.nativeElement.style.color = "orange"
      this.boy.nativeElement.style.border = "2px solid black"
    }
  }

  postCharacter(token) {
    this.playerReq = new PostPlayer();
    this.playerReq.user_id = token;
    this.playerReq.rank = "Deputy";
    this.playerReq.name = this.nameI.nativeElement.value;
    this.playerReq.description = this.descriptionI.nativeElement.value;
    this.playerReq.question_suspect = this.qsI.nativeElement.value;
    this.playerReq.question_place = this.qpI.nativeElement.value;
    this.playerReq.question_weapon = this.qwI.nativeElement.value;
    this.playerReq.goodbye = this.goodbyeI.nativeElement.value;
    this.playerReq.place_id = 1;
    this.playerReq.city_id = 1;
    this._gameService.addPlayer(this.playerReq).subscribe((res: Player) => {
      this.playerRes = res;
      this.characters = [...this.characters, this.playerRes]
    })

  }
  addCharacter() {
    if (this.character.nativeElement.style.display === "none") {
      this.character.nativeElement.style.display = "flex"
    }
    else {
      this.character.nativeElement.style.display = "none"
    }
}

}
