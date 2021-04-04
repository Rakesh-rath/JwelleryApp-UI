import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AccountModel } from '../_model/account.model';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  model: AccountModel = {
    customerName: '',
    id: 0,
    customerType: '',
    userName: '',
    password: ''
  };
  loggedin: boolean;

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {

  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      debugger;
      this.model = response;
      this.router.navigate(['/Estimation'], {
        queryParams: {
          userName: this.model.userName, customerType: this.model.customerType
        }
      });
    }, error => {
      console.log(error);
    });
  }

}
