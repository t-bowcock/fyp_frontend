import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    readonly APIUrl = "http://127.0.0.1:8000";

    constructor(protected http: HttpClient) { }

    getItemList(): Observable<any> {
        return this.http.get<any[]>(this.APIUrl + "/items");
    }

    getItem(id): Promise<any> {
        return new Promise<any>(resolve => {
            this.http.get<any[]>(this.APIUrl + "/items/" + id).subscribe(
                (data) => {
                    resolve(data);
                }
            );
        });
    }

    getTrinketList(): Observable<any> {
        return this.http.get<any[]>(this.APIUrl + "/trinkets");
    }

    getTrinket(id): Promise<any> {
        return new Promise<any>(resolve => {
            this.http.get<any[]>(this.APIUrl + "/trinkets/" + id).subscribe(
                (data) => {
                    resolve(data);
                }
            );
        });
    }

    getCharacterList(): Observable<any> {
        return this.http.get<any[]>(this.APIUrl + "/characters");
    }

    getCharacter(id): Promise<any> {
        return new Promise<any>(resolve => {
            this.http.get<any[]>(this.APIUrl + "/characters/" + id).subscribe(
                (data) => {
                    resolve(data);
                }
            );
        });
    }

    getSynergyList(): Observable<any> {
        return this.http.get<any[]>(this.APIUrl + "/synergies");
    }

    getInteractionList(): Observable<any> {
        return this.http.get<any[]>(this.APIUrl + "/interactions");
    }

    getAll(): Promise<any> {
        return new Promise<any>(resolve => {
            this.http.get<any[]>(this.APIUrl + "/all").subscribe(
                (data) => {
                    resolve(data);
                }
            );
        });
    }
}