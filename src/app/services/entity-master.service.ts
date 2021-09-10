import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntityMasterService {

  constructor(private http: HttpClient) { }

  public caseDetails(): Observable<any> {
    return this.http.get("./assets/json/entity-case.json");
  }
}
