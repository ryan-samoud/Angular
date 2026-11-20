import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  User =signal("Profil utilisateur")
  Name = signal("Ryan")
  Email= signal ("Ryan.Samoud@esprit.tn")
}
