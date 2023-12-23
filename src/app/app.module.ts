
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { CommonModuleModule } from './commonMudule/common-module.module';
import { SharedModule } from './sharedModules/shared.module';






@NgModule({
    declarations: [
        AppComponent,
        LayoutComponentComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CommonModuleModule,
        SharedModule
        

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
