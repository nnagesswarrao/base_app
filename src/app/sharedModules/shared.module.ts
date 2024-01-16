import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomecarouselComponent } from './homecarousel/homecarousel.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';





@NgModule({
  declarations: [HomecarouselComponent],
  exports: [HomecarouselComponent],
  imports: [
    CommonModule,
    NzCarouselModule ,
  ]
})
export class SharedModule { }
