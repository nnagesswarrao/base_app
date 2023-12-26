import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HearderComponent } from './hearder/hearder.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HearderComponent,FooterComponent],
  imports: [
    CommonModule,FormsModule,
    RouterModule
    
  ],
  exports:[HearderComponent,FooterComponent]
})
export class CommonModuleModule { }
