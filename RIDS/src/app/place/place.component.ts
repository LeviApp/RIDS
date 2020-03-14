import { Component, OnInit , ViewChildren, Renderer2} from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @ViewChildren('tab') tabs;
  @ViewChildren('section') sections;

// let tabs = document.querySelectorAll('.place-nav-button')
// let leftarrow = document.querySelector('.left-arrow');
// let rightarrow = document.querySelector('.right-arrow');
// const sections = document.querySelectorAll('.tab');


// const classes = ['Denver','Louisville','Idaho-Springs', 'Cripple-Creek', 'Fort-Morgan'];
// let index = 0;
// let selected = classes.filter(item => classes.indexOf(item) === index)[0]


// class Section {
//     constructor(element){
//         this.element = element;
//       }
// }

// class TabLink {
//     constructor(element){
//         let sections = document.querySelectorAll('.tab')
//         sections = Array.from(sections).map((item) => {return new Section(item)});
        

//         this.element = element;

//         this.element.addEventListener('click', () => {
//             let navs = document.querySelectorAll('.place-nav-button');
//             [...navs].map(nav => {return nav.classList.remove('clicked')})
//             this.element.classList.add('clicked')
//            this.getSec(); 
//         })
//       }

//       getSec() {
//           const element = this.element;
          
//         const sections = document.querySelectorAll('.tab');

//         sections.forEach(function(section) {
//             section.classList.add("invisible");}
//         )


//         sections.forEach(function(section) {
//             for (let i = 0;i<classes.length;i++) {
//             if (section.classList.contains(classes[i]) && element.classList.contains(classes[i]))
//             {section.classList.remove('invisible');
//             section.classList.add("visible");}
//         }}
//         )
        
//       }
// }


// menuI = Array.from(menuI).map((item) => {return new ItemLink(item)});
// tabs = Array.from(tabs).map((item) => {return new TabLink(item)} )



// const changeSec = (arrow) => {
//     if (arrow === 'right' && index !== classes.length-1) {
//         index++;
//     }

//     else if (arrow === 'right' && index === classes.length-1) {
//         index = 0;
//     }

//     else if (arrow === 'left' && index === 0) {
//         index = classes.length-1;
//     }

//     else if (arrow === 'left' && index !== 0) {
//         index--;
//     }

//     const selectSec = document.querySelector('.visible');
//     selectSec.classList.remove("visible");
//     sections.forEach(function(section) {
//         section.classList.add("invisible");}
//     )
//     selected = classes.filter(item => classes.indexOf(item) === index)[0]
//     sections.forEach(function(section) {
//         for (let i = 0;i<classes.length;i++) {
//         if (section.classList.contains(selected))
//         {section.classList.remove('invisible');
//         section.classList.add("visible");
//     }
//     }}
//     );
// }

classes = ['Denver','Louisville','Idaho Springs', 'Cripple Creek', 'Fort Morgan'];
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



// leftarrow.addEventListener('click',function() {
//     changeSec('left')

// })

// rightarrow.addEventListener('click',function() {
//     changeSec('right')
// })


}
