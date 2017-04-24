import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TemplateDrivenFormsComponent } from './template-driven-forms.component';

const routes: Routes = [
    { path: '', component: TemplateDrivenFormsComponent }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [TemplateDrivenFormsComponent],
    providers: [],
})
export class TemplateDrivenFormsModule { }
