import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  Videos: any = [];
  constructor(private sanitizer: DomSanitizer) {

    var safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl( 'https://www.youtube.com/embed/aiDwzsLCBcA?si=nw1PANNVtH25L-Y-');

    var Ararays = new Array(20).fill({ name: 'I lov Jesus', paths: safeUrl});
    this.Videos = Ararays
  }

}



