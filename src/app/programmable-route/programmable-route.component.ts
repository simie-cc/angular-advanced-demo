import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-programmable-route',
    templateUrl: './programmable-route.component.html',
    styleUrls: ['./programmable-route.component.css']
})
export class ProgrammableRouteComponent implements OnInit {
    enableRoute: boolean = false;

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    doRoute() {
        if (! this.enableRoute) {
            alert('不可以導頁哦！');
            return;
        }

        this.router.navigate(['/prog-target']);
    }

}
