import { Component, OnInit } from '@angular/core';
import { RouteGuardService } from '../route-guard.service';

@Component({
    selector: 'app-route-guard',
    templateUrl: './route-guard.component.html',
    styleUrls: ['./route-guard.component.css']
})
export class RouteGuardComponent implements OnInit {

    constructor(
        public routeGuard: RouteGuardService
    ) { }

    ngOnInit() {
    }

}
