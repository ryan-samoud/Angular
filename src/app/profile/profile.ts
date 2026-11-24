import { Component, input, output } from '@angular/core';
import { signal } from '@angular/core';
import { User } from '../Model/user';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  Userinfo =signal("Profil utilisateur");
  
  userFromParent = input<User>();
  msg = output<String>();
  sendmsg(){
    this.msg.emit('hello');
  }
}
