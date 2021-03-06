import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as jwt from 'jsonwebtoken';
import { environment } from '../../../environments/environment'

@Injectable()
export class AuthService {

  constructor(private Http: HttpClient) { }

  login(data) {
    return this.Http.post(`${environment.url}/api/login`,data);
  }

  register(data) {

    return this.Http.post(`${environment.url}/api/register`,data);
  }

  user(): string {
    return localStorage.getItem('token');
  }

  userData()
  {
      return jwt.decode(localStorage.getItem('token'))
  }
}
