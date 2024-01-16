import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiblePageComponent } from './bible-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NzSelectModule } from 'ng-zorro-antd/select';

const apiroots: Routes = [
  { path: '', component: BiblePageComponent }
]


@NgModule({
  declarations: [BiblePageComponent],
  exports: [BiblePageComponent],
  imports: [
    CommonModule, RouterModule.forChild(apiroots),
    NzSelectModule
  ]
})
export class BibleModule { }
