
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

import {LoginService} from '../../services/login.service';
import {UserService} from '../../services/user.service';
import { AppConst } from 'src/app/constants/app-const';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  private serverPath = AppConst.serverPath;
  
  constructor() { }

  ngOnInit() {
  }

}
