
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LayoutComponentComponent } from './layout-component/layout-component.component';

// import { FullLayoutComponent } from "./layouts/full-layout/full-layout.component";





const appRoutes: Routes = [
    // { path: 'internal/auth', component: FullLayoutComponent, loadChildren: () => import('./apps/auth/auth.module').then(m => m.AuthModule) },
     { path: 'internal/home', component: LayoutComponentComponent, loadChildren: () => import('./apps/home-page/home-page.module').then(m => m.HomePageModule) },


    { path: '**', redirectTo: 'internal/home' },
];
//VendorDetailsRoutingModule
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            preloadingStrategy: PreloadAllModules,
            anchorScrolling: 'enabled',
            scrollPositionRestoration: 'enabled'
        })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}