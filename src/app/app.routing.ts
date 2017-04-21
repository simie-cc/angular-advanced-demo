import { Routes } from '@angular/router';

import { HttpGetComponent } from './http-get/http-get.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';

export const appRoutes: Routes = [
    { path: '', children: [] },
    { path: 'template-ref-var', component: TemplateRefVarComponent, data: { label: 'Template 參考變數' } },
    { path: 'http-get', component: HttpGetComponent, data: { label: 'Http Get' } },
    { path: '**', component: NotfoundPageComponent }
];
