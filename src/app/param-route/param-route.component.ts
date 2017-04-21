import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-param-route',
    templateUrl: './param-route.component.html',
    styleUrls: ['./param-route.component.css']
})
export class ParamRouteComponent implements OnInit {

    user_id: string;
    data: any;

    constructor(
        private router: Router,
        public route: ActivatedRoute
    ) {
        this.route.params.subscribe(data => this.user_id = data['id']);
        this.route.data.subscribe(data => this.data = data);
    }

    ngOnInit() {
    }

    changeUrl(new_id: string) {
        this.router.navigate(['/param', new_id]);
    }
}
