import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Profile } from './profile/profile';
import { Friends } from './friends/friends';
import { Notifications } from './notifications/notifications';
import { ConferenceList } from './conference-list/conference-list';
import { Footer } from './footer/footer';
import { User } from './Model/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar,Profile, Friends, Notifications, ConferenceList, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
  user=signal<User>({
    name: 'Ryan',
    email: 'Ryan.Samoud@esprit.tn',
  })
  showmsg(msg:String){
    alert(msg)
  }
}
