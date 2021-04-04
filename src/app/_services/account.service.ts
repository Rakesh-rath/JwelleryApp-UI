import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AccountModel } from '../_model/account.model';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AccountService {

  baseurl = "http://localhost:12056/api/"
  constructor(private http: HttpClient) { }

  login(model : AccountModel){
    return this.http.post<AccountModel>(this.baseurl + 'Home/Login',model);
  }
}
