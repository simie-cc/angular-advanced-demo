
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-http-get',
    templateUrl: './http-get.component.html',
    styleUrls: ['./http-get.component.css']
})
export class HttpGetComponent implements OnInit {

    @ViewChild('data') dataComp: ElementRef;

    constructor(private http: Http) { }

    ngOnInit() {
    }

    getData(filename: string) {
        this.http.get('/assets/' + filename)
            .subscribe(resp => {
                this.dataComp.nativeElement.textContent = resp.text();
            });
        // console.log(filename);
        // console.log(this.dataComp);
        // this.dataComp.nativeElement.textContent = filename;
    }
}
