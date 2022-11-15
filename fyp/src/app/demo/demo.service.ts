import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root'
})
export class DemoService extends SharedService {

  constructor(http: HttpClient) {
    super(http);
  }

  getMovieList(): Observable<any> {
    return this.http.get<any[]>(this.APIUrl + "/movies/");
  }
}
