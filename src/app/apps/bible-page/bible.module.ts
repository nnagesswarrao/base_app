import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiblePageComponent } from './bible-page.component';



@NgModule({
  declarations: [BiblePageComponent],
  exports:[BiblePageComponent],
  imports: [
    CommonModule
  ]
})
export class BibleModule { }
