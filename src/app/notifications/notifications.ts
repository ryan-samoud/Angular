import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications = signal([
    {message: "Une nouvelle conférence est disponible."},
    {message:"Sami vous a envoyé une invitation."}
  ]);
  show= signal(false);
  BtnTxt= "Afficher les notifications";
  ShowNotifications(){
    this.show.set(!this.show());
    this.BtnTxt=this.show() ? "Masquer les notification": "Afficher les notifications"
  }
}
