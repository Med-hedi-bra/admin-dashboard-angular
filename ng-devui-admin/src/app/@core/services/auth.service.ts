import { Injectable } from '@angular/core';
import { throwError, of, catchError, map } from 'rxjs';
import { User } from 'src/app/@shared/models/user';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import { LoginResponse } from 'src/app/@shared/models/loginResponse';
import { ApiService } from './api.service';

const USERS = [
  {
    account: 'Admin',
    gender: 'male',
    userName: 'Admin',
    password: 'DevUI.admin',
    phoneNumber: '19999996666',
    email: 'admin@devui.com',
    userId: '100',
  },
  {
    account: 'User',
    gender: 'female',
    userName: 'User',
    password: 'DevUI.user',
    phoneNumber: '19900000000',
    email: 'user@devui.com',
    userId: '200',
  },
  {
    account: 'admin@devui.com',
    gender: 'male',
    userName: 'Admin',
    password: 'devuiadmin',
    phoneNumber: '19988888888',
    email: 'admin@devui.com',
    userId: '300',
  },
];

@Injectable()
export class AuthService {
  constructor(private http:HttpClient ) {}

  login(account: string, password: string) {
    // for (let i = 0; i < USERS.length; i++) {
    //   if (account === USERS[i].account && password === USERS[i].password) {
    //     let { userName, gender, phoneNumber, email } = USERS[i];
    //     let userInfo: User = { userName, gender, phoneNumber, email };
    //     return of(userInfo);
    //   }
    // }
    const userL =  {
      account: 'Admin',
      gender: 'male',
      userName: 'Admin',
      password: 'DevUI.admin',
      phoneNumber: '19999996666',
      email: 'admin@devui.com',
      userId: '100',
    };
    const body = {
      cin:account,
    password:password
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer '
    });
    return this.http.post<LoginResponse>("http://localhost:8080/municipality/auth/login", body, { headers, observe: 'response' }).pipe(
      map(response => { 
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

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userinfo');
  }

  setSession(user: LoginResponse) {
    localStorage.setItem('token', user.token);
    localStorage.setItem('userinfo', JSON.stringify(user.user));
   
  }

  isUserLoggedIn() {
    if (localStorage.getItem('userinfo')) {
      return true;
    } else {
      return false;
    }
  }
}
