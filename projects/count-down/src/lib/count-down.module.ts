import { CommonModule } from '@angular/common';
import { NgModule, Injector } from '@angular/core';
import { CountDownComponent } from './count-down.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
    declarations: [CountDownComponent],
    imports: [CommonModule],
    exports: [CountDownComponent],
    entryComponents: [CountDownComponent],
})
export class CountDownModule {
    constructor(private injector: Injector) {
        const CountDownElement = createCustomElement(CountDownComponent, {
            injector,
        });
        // Register the custom element with the browser.
        customElements.define('count-down', CountDownElement);
    }
}
