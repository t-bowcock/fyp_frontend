import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../shared.service';

@Injectable({
    providedIn: 'root'
})
export class QueryService extends SharedService {

    constructor(http: HttpClient) {
        super(http);
    }
}
