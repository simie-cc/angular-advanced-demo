import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routing';
import { RouteGuardService } from './route-guard.service';
import { LazyGuardService } from './lazy-guard.service';

import { AppComponent } from './app.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { HttpGetComponent } from './http-get/http-get.component';
import { ParamRouteComponent } from './param-route/param-route.component';
import { ProgrammableRouteComponent } from './programmable-route/programmable-route.component';
import { ProgrammableRouteTargetComponent } from './programmable-route/programmable-route-target/programmable-route-target.component';
import { RouteGuardComponent } from './route-guard/route-guard.component';
import { GuardedPageComponent } from './guarded-page/guarded-page.component';
import { Page1Component } from './guarded-page/page1/page1.component';
import { Page2Component } from './guarded-page/page2/page2.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateRefVarComponent,
    NotfoundPageComponent,
    HttpGetComponent,
    ParamRouteComponent,
    ProgrammableRouteComponent,
    ProgrammableRouteTargetComponent,
    RouteGuardComponent,
    GuardedPageComponent,
    Page1Component,
    Page2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      RouteGuardService,
      LazyGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
