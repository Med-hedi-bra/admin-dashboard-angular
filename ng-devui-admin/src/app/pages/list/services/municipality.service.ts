import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {

  constructor(private http: HttpClient) { }
  getMunicipalityData(){
    return this.http.get("http://localhost:8080/municipality/");
  }
}
