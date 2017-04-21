import { NotfoundPageComponent } from './notfound-page/notfound-page.component';

import { Routes } from '@angular/router';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';

export const appRoutes: Routes = [
    { path: '', children: [] },
    { path: 'template-ref-var', component: TemplateRefVarComponent, data: { label: 'Template 參考變數' } },
    { path: '**', component: NotfoundPageComponent }
];
