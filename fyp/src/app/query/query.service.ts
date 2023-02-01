import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';

@Injectable({
    providedIn: 'root'
})
export class QueryService extends SharedService {

    constructor(http: HttpClient) {
        super(http);
    }

    getItemList(): Observable<any> {
        return this.http.get<any[]>(this.APIUrl + "/isaac/items");
    }

    getTrinketList(): Observable<any> {
        return this.http.get<any[]>(this.APIUrl + "/isaac/trinkets");
    }

    getCharacterList(): Observable<any> {
        return this.http.get<any[]>(this.APIUrl + "/isaac/characters");
    }

    getSynergyList(): Observable<any> {
        return this.http.get<any[]>(this.APIUrl + "/isaac/synergies");
    }

    getInteractionList(): Observable<any> {
        return this.http.get<any[]>(this.APIUrl + "/isaac/interactions");
    }
}
