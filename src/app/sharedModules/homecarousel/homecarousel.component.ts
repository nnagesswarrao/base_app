import { Component } from '@angular/core';

@Component({
  selector: 'app-homecarousel',
  // standalone: true,
  // imports: [],
  templateUrl: './homecarousel.component.html',
  styleUrl: './homecarousel.component.scss'
})
export class HomecarouselComponent {

  array: any = []

  constructor() {

    this.getImage();
    this.array = new Array(5).fill({ name: 'assets/images/hd1080.png' })

  }

  getImage(): void {


  }

}
