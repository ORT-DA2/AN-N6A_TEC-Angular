import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CitySyncService {

    cityDataRequiresUpdate = new Subject<boolean>();

    constructor() {
    }

    notifyUpdate(requiresRefresh: boolean = false) {
        this.cityDataRequiresUpdate.next(requiresRefresh);
    }

}
