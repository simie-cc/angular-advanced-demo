
import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    CanActivate, CanActivateChild, CanDeactivate
} from '@angular/router';

@Injectable()
export class RouteGuardService implements CanActivate, CanActivateChild, CanDeactivate<any> {

    canActivateFlag = true;
    canActivateChildFlag = true;
    canDeactivateFlag = true;

    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('canActivate()', state.url);
        return this.canActivateFlag;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('canActivateChild()', state.url);
        return this.canActivateChildFlag;
    }

    canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
        console.log('canDeactivate()', currentState.url);
        return this.canDeactivateFlag;
    }

}
