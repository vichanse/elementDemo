import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountDownModule } from 'count-down';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, CountDownModule],
    providers: [],
    bootstrap: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
    ngDoBootstrap() {}
}
