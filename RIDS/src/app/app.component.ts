import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RIDS';


  constructor () {}

  @ViewChild('bottom') bott;
  @ViewChild('down') dArrow;
  @ViewChild('up') uArrow;

  imageDown: any = document.querySelector('.down_arrow');
  imageUp: any = document.querySelector('.up_arrow');

  ngOnInit() {

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
}
