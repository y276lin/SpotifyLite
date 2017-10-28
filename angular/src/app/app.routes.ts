import { NgModule }              from '@angular/core';
import { AboutComponent }        from './components/about.component';
import { SearchComponent }       from './components/search.component';
import { ArtistComponent }       from './components/artist.component';
import { AlbumComponent }       from './components/album.component';
import { RouterModule, Routes }  from '@angular/router';

const routes: Routes = [
    { path:'', redirectTo:'/home', pathMatch:'full' },
    { path:'artist/:id', component: ArtistComponent },
    { path:'album/:id', component: AlbumComponent },
    { path:'about', component: AboutComponent },
    { path:'home', component: SearchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}