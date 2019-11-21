import { Component, OnInit, Input } from '@angular/core';
import { CountDownService } from './count-down.service';
import { merge, interval, empty } from 'rxjs';
import { scan, mapTo, takeWhile, startWith, switchMap } from 'rxjs/operators';

@Component({
    selector: 'lib-count-down',
    template: `
        <div>
            <h1>Count down...</h1>
            <h2 *ngIf="value > 0" class="countdown">{{ value }}</h2>
            <div *ngIf="message">{{ message }}</div>
            <button class="start" (click)="startTimer()">Start Timer</button>
            <button class="pause" (click)="stopTimer()">Pause Timer</button>
        </div>
    `,
    styleUrls: ['./count-down.component.css'],
})
export class CountDownComponent implements OnInit {
    @Input()
    countdownFrom: number = 10;
    start$ = this.service.start;
    stop$ = this.service.stop;
    value: number;
    message: string;

    constructor(private service: CountDownService) {}

    ngOnInit() {
        console.log(this.countdownFrom);
        const counter$ = interval(1000);
        merge(this.start$, this.stop$)
            .pipe(
                switchMap(shouldStart => {
                    console.log(shouldStart);
                    return shouldStart ? counter$ : empty();
                }),
                mapTo(-1),
                scan((accumulator, current) => {
                    return accumulator + current;
                }, this.countdownFrom),
                takeWhile(value => value >= 0),
                startWith(this.countdownFrom)
            )
            .subscribe(value => {
                this.value = value;
                if (!value) {
                    this.message = "Let's GOOOO, jAngular :-)";
                }
            });
    }

    startTimer() {
        this.service.startCounter();
    }

    stopTimer() {
        this.service.stopCounter();
    }
}
