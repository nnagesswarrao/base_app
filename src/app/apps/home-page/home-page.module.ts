import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../../sharedModules/shared.module';


const appRoutes: Routes = [
{path:'',component:HomePageComponent},


  { path: '**', redirectTo: 'internal/auth' },
];

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    SharedModule

  ]
})
export class HomePageModule { }
