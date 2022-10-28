import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { SidebarLinkComponent } from './components/sidebar-link/sidebar-link.component';
import { StreamsComponent } from './streams/streams.component';
import { LikesComponent } from './likes/likes.component';
import { TopComponent } from './top/top.component';
import { TracksComponent } from './tracks/tracks.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PersonalPlaylistsComponent } from './personal-playlists/personal-playlists.component';

const routes: Routes = [
  { path: '', redirectTo: 'streams', pathMatch: 'full' },
  { path: 'likes', component: LikesComponent },
  { path: 'streams', component: StreamsComponent },
  { path: 'top', component: TopComponent },
  { path: 'tracks', component: TracksComponent },
  { path: 'playlists', component: PlaylistsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumCardComponent,
    SidebarLinkComponent,
    StreamsComponent,
    LikesComponent,
    TopComponent,
    TracksComponent,
    PlaylistsComponent,
    PersonalPlaylistsComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
