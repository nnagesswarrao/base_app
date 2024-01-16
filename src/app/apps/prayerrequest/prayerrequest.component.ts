import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prayerrequest',
  // standalone: true,
  // imports: [],
  templateUrl: './prayerrequest.component.html',
  styleUrl: './prayerrequest.component.scss'
})
export class PrayerrequestComponent {

  requetgform!: FormGroup;

}
