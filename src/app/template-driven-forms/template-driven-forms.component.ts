import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-template-driven-forms',
    templateUrl: './template-driven-forms.component.html',
    styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    onSubmit(event: Event, form: NgForm) {
        event.preventDefault();

        alert('Submit data: ' + JSON.stringify(form.value));
    }
}
