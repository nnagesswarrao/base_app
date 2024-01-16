import { Component } from '@angular/core';

@Component({
  selector: 'app-gellary',
  templateUrl: './gellary.component.html',
  styleUrl: './gellary.component.scss'
})
export class GellaryComponent {

  Images: any = [];

  constructor() {
    var array = new Array(20).fill({ name: "Place Name-(uploaded Date)", paths: 'assets/hd1080.png' });
    this.Images = array;
    console.log(array)
  }

}
