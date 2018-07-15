import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-samples',
    templateUrl: './samples.component.html',
    styleUrls: ['./samples.component.scss']
})

export class SamplesComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor() { }

    ngOnInit() {}
}
