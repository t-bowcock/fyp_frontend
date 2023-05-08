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

    getRel(source, target): Promise<any> {
        return new Promise<any>(resolve => {
            this.http.get<any[]>(this.APIUrl + "/relationships/" + source + "_" + target).subscribe(
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

    getAllNames(): Promise<any> {
        return new Promise<any>(resolve => {
            this.http.get<any[]>(this.APIUrl + "/all/names").subscribe(
                (data) => {
                    resolve(data["names"]);
                }
            );
        });
    }

    search(node1_id: string | null, rel: string | null, node2_id: string | null): Promise<any> {
        return new Promise<any>(resolve => {
            if (node1_id == '' && rel != '') {
                this.http.get<any[]>(this.APIUrl + "/all/rel_" + rel).subscribe(
                    (data) => {
                        resolve(data);
                    }
                );
            }
            else if (rel == '' && node2_id == '') {
                this.http.get<any[]>(this.APIUrl + "/all/" + node1_id).subscribe(
                    (data) => {
                        resolve(data);
                    }
                );
            }
            else if (rel != '' && node2_id == '') {
                this.http.get<any[]>(this.APIUrl + "/all/" + node1_id + "/rel_" + rel).subscribe(
                    (data) => {
                        resolve(data);
                    }
                );
            }
            else if (rel == '' && node2_id != '') {
                this.http.get<any[]>(this.APIUrl + "/all/" + node1_id + "/" + node2_id).subscribe(
                    (data) => {
                        resolve(data);
                    }
                );
            }
            else if (rel != '' && node2_id != '') {
                this.http.get<any[]>(this.APIUrl + "/all/" + node1_id + "/rel_" + rel + "/" + node2_id).subscribe(
                    (data) => {
                        resolve(data);
                    }
                );
            }
            else {
                console.log("shit")
            }
        });
    }
}