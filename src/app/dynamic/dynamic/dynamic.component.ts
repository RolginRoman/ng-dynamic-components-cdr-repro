import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-dynamic',
    templateUrl: './dynamic.component.html',
    styleUrls: ['./dynamic.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicComponent implements OnInit {

    @Input()
    public name: string;

    constructor(public cdr: ChangeDetectorRef) {
    }

    ngOnInit(): void {
    }

}
