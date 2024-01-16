
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LayoutComponentComponent } from './layout-component/layout-component.component';

// import { FullLayoutComponent } from "./layouts/full-layout/full-layout.component";





const appRoutes: Routes = [
    // { path: 'internal/auth', component: FullLayoutComponent, loadChildren: () => import('./apps/auth/auth.module').then(m => m.AuthModule) },
    {
        path: 'internal/home', component: LayoutComponentComponent,
        loadChildren: () => import('./apps/home-page/home-page.module').then(m => m.HomePageModule)
    },

    {
        path: 'internal/about', component: LayoutComponentComponent,
        loadChildren: () => import('./apps/about-us/about-us.module').then(m => m.AboutUsModule)
    },

    {
        path: 'internal/contact', component: LayoutComponentComponent,
        loadChildren: () => import('./apps/contact-us/contact-us.module').then(m => m.ContactUsModule)
    },

    {
        path: 'internal/gellary', component: LayoutComponentComponent,
        loadChildren: () => import('./apps/gellary/gellary.module').then(m => m.GellaryModule)
    },

    {
        path: 'internal/bible', component: LayoutComponentComponent,
        loadChildren: () => import('./apps/bible-page/bible.module').then(m => m.BibleModule)
    },


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