import {ComponentRef, InjectionToken, Injector} from "@angular/core";
import { DynamicComponent } from '../dynamic/dynamic.component';

export type UpdateFn = <C>(componentRef: ComponentRef<C>) => void;

export abstract class Builder<C extends DynamicComponent = DynamicComponent> {
    public abstract build(injector: Injector): [ComponentRef<C>, UpdateFn];
}

export const BUILDER = new InjectionToken<Builder>('BUILDER');
