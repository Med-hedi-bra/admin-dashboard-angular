import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {

  constructor(private http: HttpClient) { }
  getMunicipalityData():Observable<any>{
    let token :String|null = localStorage.getItem("token") ;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer '+token
    });
   
    return  this.http.get<any>("http://localhost:8080/municipality/",{ observe: 'response' })
    
  
  }
}
