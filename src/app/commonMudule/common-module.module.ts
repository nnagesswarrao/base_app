import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HearderComponent } from './hearder/hearder.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HearderComponent,FooterComponent],
  imports: [
    CommonModule
    
  ],
  exports:[HearderComponent,FooterComponent]
})
export class CommonModuleModule { }
