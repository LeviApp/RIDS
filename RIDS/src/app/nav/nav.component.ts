import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('bottom') bott;
  @ViewChild('down') dArrow;
  @ViewChild('up') uArrow;
  profileJson: object = null;
  
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
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

  MenuC () {
    this.bott.nativeElement.classList.remove('open')
    this.dArrow.nativeElement.style.display = "block"
    this.uArrow.nativeElement.style.display = "none"
  }

  getID() {
    console.log('hello you!', this.profileJson)
  }
  
}
