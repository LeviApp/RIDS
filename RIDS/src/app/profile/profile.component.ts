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

  constructor (public auth: AuthService) {
    
  }
  ngOnInit() {
    this.auth.userProfile$.subscribe(
      profile => {this.profileJson = profile}
    );
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
