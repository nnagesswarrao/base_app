import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  Videos: any = [];
  constructor() {

    var Ararays = new Array(20).fill({ name: 'I lov Jesus', paths: 'https://www.youtube.com/embed/aiDwzsLCBcA?si=nw1PANNVtH25L-Y-' });
    this.Videos = Ararays
  }

}



