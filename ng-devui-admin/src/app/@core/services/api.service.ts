import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpHeaders ,HttpClient } from '@angular/common/http';
import { LoginResponse } from 'src/app/@shared/models/loginResponse';
import { catchError, map, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private authService :AuthService,private http:HttpClient) { }

  fetchLogin( cin:String , password:String){
   
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer'
    });
    const body = {
      cin:cin,
      password:password
    }
    this.http.post<LoginResponse>("http://localhost:8080/municipality/auth/login", body, { headers, observe: 'response' }).pipe(
      map(response => {
        // const authHeader = response.headers.get('Authorization');
        
        if (response.body !=null && response.body.token!=null) {
          return response.body; // return the token as the successful output
        } else {
          throw new Error('Unable to retrieve token from server');
        }
      }),
      catchError(error => {
        return throwError('Please make sure you have entered correct account and password');
      })
    );
  }
}
