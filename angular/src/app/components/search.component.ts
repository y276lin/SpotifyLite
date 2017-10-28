import { Artist } from '../data/Artist';
import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  searchStr: string;
  searchable: boolean;
  app_name: string;
  searchRes: Artist[];
  img_not_available = '../../assets/image_not_available.png';

  searchMusic() {
    if (this.searchStr) {
      this.searchable = true;
      this._spotifyService.searchMusic('*' + this.searchStr + '*').subscribe(res => {
        this.searchRes = res.artists.items;
      });
    } else {
      this.searchable = false;
    }
  }

  constructor(private _spotifyService: SpotifyService) {
    this.app_name = this._spotifyService.app_name;
  }
}
