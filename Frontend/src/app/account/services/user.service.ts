import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { environment } from 'src/environments/environment';
import { AccountLoginModel } from '../models';

@Injectable()
export class UserService {
  private apiEndPoint = environment.apiBaseUrl + '/user';

  constructor(private http: HttpClient) { } 

  add(model: AccountLoginModel): Observable<any> {
    return this.http.post(this.apiEndPoint, model);
  } 
}
