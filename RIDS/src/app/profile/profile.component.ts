import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthService} from '../auth.service'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileJson: object = null;
  @ViewChild('char') character;
  @ViewChild('boy') boy;
  @ViewChild('girl') girl;

  name: string = '';
  description: string = '';

  constructor (public auth: AuthService) {
    
  }

  ngOnInit() {
    this.auth.userProfile$.subscribe(
      profile => {this.profileJson = profile}
    );
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
    }
    else {
      this.name = "Melony Brooks"
      this.description = "My name is Brooks, Melony Brooks."
      this.girl.nativeElement.style.backgroundColor = "darkorange"
      this.girl.nativeElement.style.color = "white"
      this.girl.nativeElement.style.border = "2px solid white"
      this.boy.nativeElement.style.backgroundColor = "white"
      this.boy.nativeElement.style.color = "orange"
      this.boy.nativeElement.style.border = "2px solid black"
    }
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
