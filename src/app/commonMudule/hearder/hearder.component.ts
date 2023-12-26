import { Component } from '@angular/core';

@Component({
  selector: 'app-hearder',
  // standalone: true,
  // imports: [],
  templateUrl: './hearder.component.html',
  styleUrl: './hearder.component.scss'
})
export class HearderComponent {
  RoutersLinks = [

    { path: '/internal/home', Name: 'Home' },
    { path: '/internal/gellary/photos', Name: 'Photos' },
    { path: '/internal/gellary/videos', Name: 'videos' },
    { path: '/internal/contact', Name: 'Contact Us' },
    { path: '/internal/about', Name: 'About Us' }

  ]

}
