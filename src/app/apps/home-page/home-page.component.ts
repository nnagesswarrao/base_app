import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  // standalone: true,
  // imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  effect = 'scrollx';
  wordsData = [
    {
      passage: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed fugit facilis eius
    dicta voluptatibus cumque perspiciatis eligendi consequuntur est enim, hic saepe ipsa
    molestias minus voluptate neque repudiandae exercitationem!` , id: 1
    },
    {
      passage: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed fugit facilis eius
    dicta voluptatibus cumque perspiciatis eligendi consequuntur est enim, hic saepe ipsa
    molestias minus voluptate neque repudiandae exercitationem!` , id: 2
    }, {
      passage: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed fugit facilis eius
    dicta voluptatibus cumque perspiciatis eligendi consequuntur est enim, hic saepe ipsa
    molestias minus voluptate neque repudiandae exercitationem!` , id: 3
    },
    {
      passage: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed fugit facilis eius
    dicta voluptatibus cumque perspiciatis eligendi consequuntur est enim, hic saepe ipsa
    molestias minus voluptate neque repudiandae exercitationem!` , id: 4
    }
  ]

}
