import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateRefVarComponent,
    NotfoundPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
