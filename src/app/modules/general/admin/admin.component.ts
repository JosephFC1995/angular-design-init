import { Component, OnInit } from '@angular/core';
import { faUser, faSignOutAlt, faDesktop, faClipboardCheck, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  faDesktop = faDesktop;
  faClipboardCheck = faClipboardCheck;
  faBars = faBars;
  faTimes = faTimes;
  now;
  menuMovil;
  constructor() {
    this.menuMovil = false
    this.now = moment().lang("es");
  }

  ngOnInit(): void {
  }

  openMenu(): void {
    console.log('hola')
    this.menuMovil = true
  }
  closeMenu(): void {
    this.menuMovil = false
  }

}
