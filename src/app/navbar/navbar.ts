import { Component } from '@angular/core';
import { signal } from '@angular/core';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  links=signal([
    {name: 'Home',path:'/home'},
    {name: 'Profil',path:'/Profile'},
    {name: 'Conference',path:'/Confs'},
    {name: 'Friends',path:'/Friends'},
    {name: 'Detail',path:'/Detail'},
    {name: 'Notifications',path:'/Notif'}
  ]);
}
