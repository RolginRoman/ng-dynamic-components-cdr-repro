import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic.component';

@NgModule({
    declarations: [DynamicComponent],
    imports: [
        CommonModule
    ],
    exports: [DynamicComponent],
    entryComponents: [DynamicComponent]
})
export class DynamicModule {
}
