import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;
    private audio: HTMLAudioElement;
    private baseUrl = 'https://spotifylite.herokuapp.com/api/';
    app_name = 'SpotifyLite';
    status: EventEmitter<string> = new EventEmitter();

    constructor(private _http: Http, private titleService: Title) {
        this.titleService.setTitle(this.app_name);
        if (window.location.href.includes("localhost")) {
            this.baseUrl = 'http://localhost:5000/api/';
        }
    }

    searchMusic(str: string, type = 'artist') {
        this.searchUrl = this.baseUrl + 'searchMusic/' + str;
        return this._http.get(this.searchUrl).map(res => res.json(), err => alert('No Internet Connection'));
    }

    getArtist(artistId: string) {
        this.artistUrl = this.baseUrl + 'getArtist/' + artistId;
        return this._http.get(this.artistUrl).map(res => res.json(), err => alert('No Internet Connection'));
    }

    getAlbums(artistId: string) {
        this.albumsUrl = this.baseUrl + 'getAlbums/' + artistId;
        return this._http.get(this.albumsUrl).map(res => res.json(), err => alert('No Internet Connection'));
    }

    getAlbum(artistId: string) {
        this.albumUrl = this.baseUrl + 'getAlbum/' + artistId;
        return this._http.get(this.albumUrl).map(res => res.json(), err => alert('No Internet Connection'));
    }

    preview(url: string) {
        if (this.audio) {
            this.audio.pause();
        }
        if (url) {
            this.audio = new Audio(url);
            this.audio.play();
            this.audio.onended = () => {
                this.status.emit('ended');
            };
            this.audio.onplaying = () => {
                this.status.emit('ready');
            };
        }
    }
}
