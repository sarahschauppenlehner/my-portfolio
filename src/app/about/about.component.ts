import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  numbers: Array<number>;

  constructor() {
    this.numbers = Array(5).fill(0).map(( x, i ) => i);
   }

  qualifications = [
    { name: 'HTML', level: 5 },
    { name: 'CSS/SCSS', level: 5 },
    { name: 'JavaScript', level: 4 },
    { name: 'Vue.js/Nuxt.js', level: 4 },
    { name: 'Angular', level: 2 },
    { name: 'Strapi', level: 2 },
    { name: 'REST', level: 4 },
    { name: 'GraphQL', level: 3 },
    { name: 'Wordpress', level: 4 }
  ];

  ngOnInit(): void {
  }

}
