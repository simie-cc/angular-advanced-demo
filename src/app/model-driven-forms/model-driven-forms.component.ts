
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-model-driven-forms',
    templateUrl: './model-driven-forms.component.html',
    styleUrls: ['./model-driven-forms.component.css']
})
export class ModelDrivenFormsComponent implements OnInit {

    pageForm: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.pageForm = this.fb.group({
            'first': ['', Validators.required],
            'last': ['']
        });
        // 上下二種寫法的結果相同，FormBuilder 只是提供了快捷寫法
        // this.pageForm = new FormGroup({
        //     'first': new FormControl('', Validators.required),
        //     'last': new FormControl('')
        // });
    }

    onSubmit() {
        alert('Submit data: ' + JSON.stringify(this.pageForm.value));
    }
}
