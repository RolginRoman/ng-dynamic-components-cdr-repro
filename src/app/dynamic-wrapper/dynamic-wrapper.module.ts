import { ComponentFactoryResolver, ComponentRef, Injectable, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicWrapperComponent } from './dynamic-wrapper/dynamic-wrapper.component';
import { DynamicComponent } from '../dynamic/dynamic/dynamic.component';
import { BUILDER, Builder, UpdateFn } from './dynamic.api';

@Injectable()
class DynamicComponentBuilder extends Builder {
    constructor(private componentFactory: ComponentFactoryResolver, private injector: Injector) {
        super();
    }

    build(injector: Injector): [ComponentRef<DynamicComponent>, UpdateFn] {
        let component = this.componentFactory.resolveComponentFactory(DynamicComponent).create(injector);
        component.instance.name = 'My Very Cool Dynamic Name';
        return [component, (componentRef => component.instance.name = 'New Name')];
    }
}

@Injectable()
class DynamicComponentBuilder1 extends Builder {
    constructor(private componentFactory: ComponentFactoryResolver, private injector: Injector) {
        super();
    }

    build(injector: Injector): [ComponentRef<DynamicComponent>, UpdateFn] {
        let component = this.componentFactory.resolveComponentFactory(DynamicComponent).create(injector);
        component.instance.name = 'My Very Cool Dynamic Name 1'
        return [component, (componentRef => component.instance.name = 'New Name1')];
    }
}

@NgModule({
    declarations: [DynamicWrapperComponent],
    imports: [
        CommonModule
    ],
    exports: [
        DynamicWrapperComponent
    ],
    providers: [
        {
            provide: BUILDER,
            useClass: DynamicComponentBuilder,
            multi: true,
        },
        {
            provide: BUILDER,
            useClass: DynamicComponentBuilder1,
            multi: true,
        },
    ]
})
export class DynamicWrapperModule {
}
