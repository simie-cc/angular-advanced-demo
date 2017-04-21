
import { Component } from '@angular/core';

import { appRoutes } from './app.routing';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    routes = appRoutes;

    transPath(path: string) {
        return '/' + path;
    }
}
