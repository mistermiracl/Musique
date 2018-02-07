import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { moduleRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/common/menu/menu.component';
import { PlaylistComponent } from "./components/playlist/playlist.component";
import { AlbumsComponent } from "./components/albums/albums.component";
import { EventsAndBlogComponent } from "./components/events&blog/eventsandblog.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PlaylistComponent,
    AlbumsComponent,
    EventsAndBlogComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    moduleRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
