import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../../sharedModules/shared.module';
import { PrayerrequestComponent } from '../prayerrequest/prayerrequest.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ContactUsModule } from '../contact-us/contact-us.module';
import { BibleModule } from '../bible-page/bible.module';
const appRoutes: Routes = [
{path:'',component:HomePageComponent},


  { path: '**', redirectTo: 'internal/home' },
];

@NgModule({
  declarations: [
    HomePageComponent,
    PrayerrequestComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    SharedModule,
    NzCarouselModule,
    NzInputModule,
    FormsModule,
    NzButtonModule,
    BibleModule
    // ContactUsModule


  ]
})
export class HomePageModule { }
