import { Component, OnInit , ViewChildren, Renderer2} from '@angular/core';

@Component({
  selector: 'app-suspect',
  templateUrl: './suspect.component.html',
  styleUrls: ['./suspect.component.scss']
})
export class SuspectComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @ViewChildren('tab') tabs;
  @ViewChildren('section') sections;

classes = ['Gender','Race','Height','Weight', 'Age', 'Hair', 'Face', 'Unique'];
index = 0;

showTab(value) {

  for (let val of this.tabs) {
    if (val.nativeElement.innerHTML === value) {
      this.renderer.addClass(val.nativeElement,'clicked')
      console.log(val.nativeElement)
    }

    else {
      this.renderer.removeClass(val.nativeElement,'clicked')
    }
  }

  for (let val of this.sections) {
    if (val.nativeElement.textContent.search(value) === 0) {
      this.renderer.removeClass(val.nativeElement,'invisible')
      this.renderer.addClass(val.nativeElement,'visible')
      console.log(val.nativeElement)
    }

    else {
      this.renderer.removeClass(val.nativeElement,'visible')
      this.renderer.addClass(val.nativeElement,'invisible')

    }
  }


}

showTabArrow(arrow) {
  if (arrow === 'right') {
    if (this.index === this.classes.length-1) {
      this.index = 0
    }

    else {
      this.index++;
    }
  }

  else {
    if (this.index === 0) {
      this.index = this.classes.length-1
    }

    else {
      this.index--;
    }
  }

  for (let val of this.sections) {
    if (val.nativeElement.textContent.search(this.classes[this.index]) === 0) {
      this.renderer.removeClass(val.nativeElement,'invisible')
      this.renderer.addClass(val.nativeElement,'visible')
      console.log(val.nativeElement)
    }

    else {
      this.renderer.removeClass(val.nativeElement,'visible')
      this.renderer.addClass(val.nativeElement,'invisible')
    }
  }
}
}

