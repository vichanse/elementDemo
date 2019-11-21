import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CountDownService {
    private _start = new BehaviorSubject<boolean>(false);
    public readonly start = this._start.asObservable();

    private _stop = new BehaviorSubject<boolean>(false);
    public readonly stop = this._start.asObservable();

    constructor() {}

    startCounter() {
        this._start.next(true);
    }

    stopCounter() {
        this._start.next(false);
    }
}
