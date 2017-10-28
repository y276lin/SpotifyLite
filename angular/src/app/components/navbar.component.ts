import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  app_name: string;

  constructor(private _spotifyService: SpotifyService) {
    this.app_name = this._spotifyService.app_name;
  }
}
