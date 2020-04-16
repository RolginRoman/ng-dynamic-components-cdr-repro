import {ChangeDetectionStrategy, Component, Inject, Injector, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {BUILDER, Builder} from "./dynamic.api";
import { timer } from 'rxjs';

@Component({
    selector: 'app-dynamic-wrapper',
    template: '<ng-container #view></ng-container>',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicWrapperComponent implements OnInit {

    @ViewChild('view', {read: ViewContainerRef, static: true})
    public view: ViewContainerRef;

    constructor(
        @Inject(BUILDER) private builders: Builder[],
        private injector: Injector
    ) {
    }

    ngOnInit(): void {
        this.createComponent();
    }

    private createComponent() {
        this.builders.forEach((builder, index) => {
            let [componentRef, updateFn] = builder.build(this.injector);
            this.view.insert(componentRef.hostView);
            timer(2000).subscribe(() => {
                updateFn(componentRef);
                // only second component will updates and refresh DOM
                index === 0 ? componentRef.changeDetectorRef.detectChanges() : componentRef.instance.cdr.detectChanges();
            });
        });

    }
}
