import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import {AuthService} from './auth.service'
import auth0 from '@auth0/auth0-spa-js'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RIDS';
  profileJson: object = null;
  map_open = false;


  constructor (public auth: AuthService) {
    
  }

  @ViewChild('bottom') bott;
  @ViewChild('down') dArrow;
  @ViewChild('up') uArrow;

  imageDown: any = document.querySelector('.down_arrow');
  imageUp: any = document.querySelector('.up_arrow');


  ngOnInit() {
    this.auth.userProfile$.subscribe(
      profile => {this.profileJson = profile}
    );
  }
  MenuO() {
    this.bott.nativeElement.classList.add('open')
    this.dArrow.nativeElement.style.display = "none"
    this.uArrow.nativeElement.style.display = "block"

    console.log(this.bott.nativeElement)
}

getID() {
  console.log('hello you!', this.profileJson)
}

MenuC () {
  this.bott.nativeElement.classList.remove('open')
  this.dArrow.nativeElement.style.display = "block"
  this.uArrow.nativeElement.style.display = "none"
}

mapOpen(e) {
  if (e.target.value === "mapbutton") {
    this.map_open = !this.map_open;
    e.stopPropagation();
  }
  else {
    this.map_open = false;
  }
}
// mapClose() {
//   this.map_open = false;
// }
}
