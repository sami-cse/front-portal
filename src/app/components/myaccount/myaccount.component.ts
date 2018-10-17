
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

import {LoginService} from '../../services/login.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
