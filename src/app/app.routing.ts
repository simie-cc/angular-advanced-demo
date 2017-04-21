import { ParamRouteComponent } from './param-route/param-route.component';
import { Routes } from '@angular/router';

import { HttpGetComponent } from './http-get/http-get.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { ProgrammableRouteComponent } from './programmable-route/programmable-route.component';
import { ProgrammableRouteTargetComponent } from './programmable-route/programmable-route-target/programmable-route-target.component';

export const appRoutes: Routes = [
    { path: '', children: [] },
    { path: 'template-ref-var', component: TemplateRefVarComponent, data: { label: 'Template 參考變數' } },
    { path: 'http-get', component: HttpGetComponent, data: { label: 'Http Get' } },
    { path: 'param', component: ParamRouteComponent, data: { label: 'Param Route' } },
    { path: 'param/:id', component: ParamRouteComponent },
    { path: 'prog', component: ProgrammableRouteComponent, data: { label: 'Programmable Route' } },
    { path: 'prog-target', component: ProgrammableRouteTargetComponent },
    { path: '**', component: NotfoundPageComponent }
];
