import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GellaryComponent } from './gellary.component';
import { VideosComponent } from './videos/videos.component';
import { RouterModule, Routes } from '@angular/router';

const ApRouts: Routes = [
  { path: 'photos', component: GellaryComponent },
  { path: 'videos', component: VideosComponent }

]

@NgModule({
  declarations: [
    GellaryComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ApRouts)
  ]
})
export class GellaryModule { }
