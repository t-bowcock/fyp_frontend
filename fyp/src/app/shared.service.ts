import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    readonly APIUrl = "http://127.0.0.1:8000";

    constructor(protected http: HttpClient) { }

    getItemList(): Observable<any> {
        return this.http.get<any[]>(this.APIUrl + "/isaac/items");
    }

    getItem(id): Promise<any> {
        return new Promise<any>(resolve => {
            this.http.get<any[]>(this.APIUrl + "/isaac/items/" + id).subscribe(
                (data) => {
                    resolve(data);
                }
            );
        });
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

    getAll(): Promise<any> {
        return new Promise<any>(resolve => {
            this.http.get<any[]>(this.APIUrl + "/isaac/all").subscribe(
                (data) => {
                    resolve(data);
                }
            );
        });
    }
}