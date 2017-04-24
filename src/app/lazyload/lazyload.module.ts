import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LazyloadComponent } from './lazyload.component';

const routes: Routes = [
    { path: '', component: LazyloadComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [LazyloadComponent],
    providers: [],
})
export class LazyloadModule { }
