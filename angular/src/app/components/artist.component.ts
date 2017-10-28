import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../data/Artist';
import { Album } from '../data/Album';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent implements OnInit
{
    id: string;
    artist: Artist[];
    albums: Album[];
    img_not_available = '../../assets/image_not_available.png';

    constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this._route.params.map(params => params['id']).subscribe( (id) => {
            this._spotifyService.getArtist(id).subscribe( artist => {
                this.artist = artist;
            });
            this._spotifyService.getAlbums(id).subscribe( albums => {
                this.albums = albums.items;
            });
        });
    }
}
