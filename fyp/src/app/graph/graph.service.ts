import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../shared.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService extends SharedService {

  constructor(http: HttpClient) {
    super(http);
  }

}
