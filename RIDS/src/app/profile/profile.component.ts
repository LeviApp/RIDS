import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileJson: object = null;

  constructor (public auth: AuthService) {
    
  }
  ngOnInit() {
    this.auth.userProfile$.subscribe(
      profile => {this.profileJson = profile}
    );
  }

}
