webpackJsonp([1,4],{

/***/ 158:
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n\n<div class=\"main\">\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<h1>About {{app_name}}</h1>\n<h3>Version: 1.1</h3>\n<p>This is an Angular 2 app that uses the Spotify Web Api to find artist, albums and track listings</p>\n<hr style=\"border:1px solid #6AE368\">\n<p>Built by <span class=\"theme\">Johnson Han</span></p>\n<a class=\"bubble theme btn-primary link-bubble\" target=\"_blank\" href=\"https://www.github.com/x65han\">&nbsp;Github&nbsp;</a>\n<a class=\"bubble theme btn-primary link-bubble\" target=\"_blank\" href=\"https://www.linkedin.com/in/x65han\">Linkedin</a>\n<a class=\"bubble theme btn-primary link-bubble\" target=\"_blank\" href=\"http://www.JohnsonHan.com/\">Website</a>"

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpotifyService = (function () {
    function SpotifyService(_http, titleService) {
        this._http = _http;
        this.titleService = titleService;
        this.baseUrl = 'https://spotifylite.herokuapp.com/api/';
        this.app_name = 'SpotifyLite';
        this.status = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.titleService.setTitle(this.app_name);
    }
    SpotifyService.prototype.searchMusic = function (str, type) {
        if (type === void 0) { type = 'artist'; }
        this.searchUrl = this.baseUrl + 'searchMusic/' + str;
        return this._http.get(this.searchUrl).map(function (res) { return res.json(); }, function (err) { return alert('No Internet Connection'); });
    };
    SpotifyService.prototype.getArtist = function (artistId) {
        this.artistUrl = this.baseUrl + 'getArtist/' + artistId;
        return this._http.get(this.artistUrl).map(function (res) { return res.json(); }, function (err) { return alert('No Internet Connection'); });
    };
    SpotifyService.prototype.getAlbums = function (artistId) {
        this.albumsUrl = this.baseUrl + 'getAlbums/' + artistId;
        return this._http.get(this.albumsUrl).map(function (res) { return res.json(); }, function (err) { return alert('No Internet Connection'); });
    };
    SpotifyService.prototype.getAlbum = function (artistId) {
        this.albumUrl = this.baseUrl + 'getAlbum/' + artistId;
        return this._http.get(this.albumUrl).map(function (res) { return res.json(); }, function (err) { return alert('No Internet Connection'); });
    };
    SpotifyService.prototype.preview = function (url) {
        var _this = this;
        if (this.audio) {
            this.audio.pause();
        }
        if (url) {
            this.audio = new Audio(url);
            this.audio.play();
            this.audio.onended = function () {
                _this.status.emit('ended');
            };
            this.audio.onplaying = function () {
                _this.status.emit('ready');
            };
        }
    };
    return SpotifyService;
}());
SpotifyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object])
], SpotifyService);

var _a, _b;
//# sourceMappingURL=spotify.service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<div id=\"album\" *ngIf=\"album\">\n    <header class=\"album-header\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div *ngIf=\"album.images\">\n                    <img class=\"album-thumb\" src=\"{{album.images[0].url}}\">\n                </div>\n            </div>\n            <div class=\"col-md-8\">\n                <h4 *ngIf=\"album.artists\">\n                    <span *ngFor=\"let artist of album.artists\">\n                        {{artist.name}}\n                    </span>\n                </h4>\n                <h2>{{album.name}}</h2>\n                <h5>Release Date: {{album.release_date}}</h5>\n                <a target=\"_blank\" class=\"btn btn-primary theme\" href=\"{{album.external_urls.spotify}}\">View In Spotify</a>\n            </div>\n        </div>\n    </header>\n\n    <div class=\"album-tracks\">\n        <h2>Album Tracks</h2>\n        <div *ngFor=\"let track of album.tracks.items;let i = index\">\n            <div class=\"well\">\n                <h5>{{track.track_number}} - {{track.name}}</h5>\n                <button class=\"btn btn-primary\" (click)=\"preview(track.preview_url, i)\" *ngIf=\"i!=sampleIndex && track.preview_url\">Preview</button>\n                <button class=\"btn btn-primary btn-loading\" *ngIf=\"loading && i===sampleIndex && track.preview_url\">Loading</button>\n                <button class=\"btn btn-red\" (click)=\"preview(null, -1)\" *ngIf=\"i==sampleIndex && !loading && track.preview_url\">&nbsp;&nbsp;Pause&nbsp;&nbsp;</button>\n                <span class=\"theme\" *ngIf=\"!track.preview_url\">preview not available</span>\n            </div>\n        </div>\n    </div>\n</div>    "

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"artist\">\n    <header class=\"artist-header\">\n        <div *ngIf=\"artist.images\">\n            <img class=\"artist-thumb img-circle\" src=\"{{artist.images[0]?.url}}\" *ngIf=\"artist.images[0]\"/>\n            <img class=\"artist-thumb img-circle\" src=\"{{img_not_available}}\" *ngIf=\"!artist.images[0]\"/>\n        </div>\n        <h1>{{artist.name}}</h1>\n        <p *ngIf=\"artist.genres\">\n            <span *ngFor=\"let g of artist.genres\" class=\"bubble\">{{g}}</span>\n        </p>\n    </header>\n\n    <div class=\"artist-albums\">\n        <div class=\"row\">\n            <div *ngFor=\"let album of albums\">\n                <div class=\"col-md-3\">\n                    <div class=\"well album\">\n                        <div *ngIf=\"album.images\">\n                            <img class=\"album-thumb img-thumbnail\" src=\"{{album.images[0]?.url}}\">\n                            <h4>{{album.name}}</h4>\n                            <a class=\"btn btn-default btn-block\" routerLink=\"/album/{{album.id}}\">Album Details</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" routerLink=\"/\" style=\"color:#6AE368;\">{{app_name}}</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n            <li routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\n            <li routerLinkActive=\"active\"><a routerLink=\"/about\">About</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<h1>Need Music?</h1>\n<p class=\"lead\">Use the {{app_name}} app to browse new releases and find the preview snipppet!</p>\n<form>\n    <div class=\"form-group\">\n        <input  autocomplete=\"off\" type=\"text\" name=\"searchStr\" [(ngModel)]=\"searchStr\" class=\"form-control\" placeholder=\"Search by Artist (e.g. Ed Sheeran)\"\n            (keyup)=\"searchMusic()\" (onEnter)=\"searchMusic()\">\n    </div>\n</form>\n\n<div *ngIf=\"searchRes && searchable\">\n    <div *ngFor=\"let res of searchRes\">\n        <div class=\"row\">\n            <div clas=\"col-md-12\">\n                <div class=\"search-res well\">\n                    <div *ngIf=\"res.images\">\n                        <a routerLink=\"/artist/{{res.id}}\">\n                            <img class=\"artist-thumb img-circle\" src=\"{{res.images[0]?.url}}\" *ngIf=\"res.images[0]\"/>\n                            <img class=\"artist-thumb img-circle\" src=\"{{img_not_available}}\" *ngIf=\"!res.images[0]\"/>\n                        </a>\n                    </div>\n                    <h4><a routerLink=\"/artist/{{res.id}}\">{{res.name}}</a></h4>\n                    <div *ngIf=\"res.genres?.length > 0\" class=\"genre-wrapper\">\n                        <strong class=\"theme\" style=\"margin-right:10px\">Genres:</strong>\n                        <span class=\"bubble\" *ngFor=\"let g of res.genres.slice(0,5)\">{{g}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <hr style=\"border:1px solid #6AE368\">\n    <div style=\"width:100%;text-align:center;color:#6AE368;\">end of list</div>\n</div>"

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(_spotifyService) {
        this._spotifyService = _spotifyService;
        this.app_name = this._spotifyService.app_name;
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'about',
        template: __webpack_require__(159),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumComponent = (function () {
    function AlbumComponent(_spotifyService, _route) {
        this._spotifyService = _spotifyService;
        this._route = _route;
        this.sampleIndex = -1;
        this.loading = false;
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.map(function (params) { return params['id']; }).subscribe(function (id) {
            _this._spotifyService.getAlbum(id).subscribe(function (a) {
                _this.album = a;
            });
        });
        this.subscription = this._spotifyService.status.subscribe(function (x) {
            if (x === 'ended') {
                _this.preview(null, -1);
            }
            else {
                _this.loading = false;
            }
        });
    };
    AlbumComponent.prototype.preview = function (url, i) {
        this.sampleIndex = i;
        this.loading = true;
        this._spotifyService.preview(url);
    };
    return AlbumComponent;
}());
AlbumComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'album',
        template: __webpack_require__(160),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], AlbumComponent);

var _a, _b;
//# sourceMappingURL=album.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_spotify_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistComponent = (function () {
    function ArtistComponent(_spotifyService, _route) {
        this._spotifyService = _spotifyService;
        this._route = _route;
        this.img_not_available = '../../assets/image_not_available.png';
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.map(function (params) { return params['id']; }).subscribe(function (id) {
            _this._spotifyService.getArtist(id).subscribe(function (artist) {
                _this.artist = artist;
            });
            _this._spotifyService.getAlbums(id).subscribe(function (albums) {
                _this.albums = albums.items;
            });
        });
    };
    return ArtistComponent;
}());
ArtistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'artist',
        template: __webpack_require__(161),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_spotify_service__["a" /* SpotifyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], ArtistComponent);

var _a, _b;
//# sourceMappingURL=artist.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent(_spotifyService) {
        this._spotifyService = _spotifyService;
        this.img_not_available = '../../assets/image_not_available.png';
        this.app_name = this._spotifyService.app_name;
    }
    SearchComponent.prototype.searchMusic = function () {
        var _this = this;
        if (this.searchStr) {
            this.searchable = true;
            this._spotifyService.searchMusic('*' + this.searchStr + '*').subscribe(function (res) {
                _this.searchRes = res.artists.items;
            });
        }
        else {
            this.searchable = false;
        }
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__(163),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 87;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(98);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__(158)
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_search_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_about_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_artist_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_album_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_spotify_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_artist_component__["a" /* ArtistComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_album_component__["a" /* AlbumComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__services_spotify_service__["a" /* SpotifyService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_about_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_artist_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_album_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'artist/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_artist_component__["a" /* ArtistComponent */] },
    { path: 'album/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_album_component__["a" /* AlbumComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__components_about_component__["a" /* AboutComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_search_component__["a" /* SearchComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(_spotifyService) {
        this._spotifyService = _spotifyService;
        this.app_name = this._spotifyService.app_name;
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'nav-bar',
        template: __webpack_require__(162),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.bundle.js.map