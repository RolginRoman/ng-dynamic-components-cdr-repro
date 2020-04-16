import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-dynamic',
    template: `
        <h4>{{index}}</h4>
        <p>{{name}}</p>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicComponent implements OnInit {

    @Input()
    public name: string;
    @Input()
    public index: string;

    constructor(public cdr: ChangeDetectorRef) {
    }

    ngOnInit(): void {
    }

}
