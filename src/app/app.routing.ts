
import { ParamRouteComponent } from './param-route/param-route.component';
import { Routes } from '@angular/router';

import { RouteGuardService } from './route-guard.service';
import { LazyGuardService } from './lazy-guard.service';

import { HttpGetComponent } from './http-get/http-get.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { ProgrammableRouteComponent } from './programmable-route/programmable-route.component';
import { ProgrammableRouteTargetComponent } from './programmable-route/programmable-route-target/programmable-route-target.component';
import { RouteGuardComponent } from './route-guard/route-guard.component';
import { GuardedPageComponent } from './guarded-page/guarded-page.component';
import { Page1Component } from './guarded-page/page1/page1.component';
import { Page2Component } from './guarded-page/page2/page2.component';

export const appRoutes: Routes = [
    { path: '', children: [], data: { label: '首頁' } },
    { path: 'template-ref-var', component: TemplateRefVarComponent, data: { label: 'Template 參考變數' } },
    { path: 'http-get', component: HttpGetComponent, data: { label: 'Http Get' } },
    { path: 'param', component: ParamRouteComponent, data: { label: 'Param Route' } },
    { path: 'param/:id', component: ParamRouteComponent },
    { path: 'prog', component: ProgrammableRouteComponent, data: { label: 'Programmable Route' } },
    { path: 'prog-target', component: ProgrammableRouteTargetComponent },
    { path: 'route-guard', component: RouteGuardComponent, data: { label: 'Route Guard' } },
    {
        path: 'guarded', component: GuardedPageComponent, data: { label: 'Guarded' },
        children: [
            { path: '', pathMatch: 'full', redirectTo: '/guarded/page1' },
            { path: 'page1', component: Page1Component },
            { path: 'page2', component: Page2Component }
        ],
        canActivate: [RouteGuardService], canActivateChild: [RouteGuardService], canDeactivate: [RouteGuardService]
    },
    { path: 'lazyload', loadChildren: './lazyload/lazyload.module#LazyloadModule', data: { label: 'Lazyload' },
      canLoad: [LazyGuardService] },
    { path: '**', component: NotfoundPageComponent }
];
