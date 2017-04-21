import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { HttpGetComponent } from './http-get/http-get.component';
import { ParamRouteComponent } from './param-route/param-route.component';
import { ProgrammableRouteComponent } from './programmable-route/programmable-route.component';
import { ProgrammableRouteTargetComponent } from './programmable-route/programmable-route-target/programmable-route-target.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateRefVarComponent,
    NotfoundPageComponent,
    HttpGetComponent,
    ParamRouteComponent,
    ProgrammableRouteComponent,
    ProgrammableRouteTargetComponent
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
