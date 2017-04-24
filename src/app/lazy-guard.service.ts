
import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, RouterStateSnapshot, Route,
    CanLoad
} from '@angular/router';

@Injectable()
export class LazyGuardService implements CanLoad {

    constructor() { }

    canLoad(route: Route): boolean {
        alert('Lazy guard!');
        return true;
    }
}
