import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../data/Album';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
})
export class AlbumComponent implements OnInit
{
    id: string;
    album: Album[];
    sampleIndex: number = -1;
    subscription: any;
    loading = false;

    constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this._route.params.map(params => params['id']).subscribe( (id) => {
            this._spotifyService.getAlbum(id).subscribe( a => {
                this.album = a;
            });
        });

        this.subscription = this._spotifyService.status.subscribe( x => {
            if (x === 'ended') {
                this.preview(null, -1);
            } else {
                this.loading = false;
            }
        });
    }

    preview(url: string, i: number) {
        this.sampleIndex = i;
        this.loading = true;
        this._spotifyService.preview(url);
    }
}
