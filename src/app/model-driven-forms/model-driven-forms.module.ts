import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ModelDrivenFormsComponent } from './model-driven-forms.component';

const routes: Routes = [
    { path: '', component: ModelDrivenFormsComponent }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [ModelDrivenFormsComponent],
    providers: [],
})
export class ModelDrivenFormsModule { }
