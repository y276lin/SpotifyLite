import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  app_name: string;

  constructor(private _spotifyService: SpotifyService) {
    this.app_name = this._spotifyService.app_name;
  }
}
