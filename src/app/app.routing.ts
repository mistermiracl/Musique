import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlaylistComponent } from "./components/playlist/playlist.component";
import { AlbumsComponent } from "./components/albums/albums.component";
import { EventsAndBlogComponent } from "./components/events&blog/eventsandblog.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home', data: { title: 'Home' } },
    { path: 'home', component: HomeComponent, data: { title: 'Home' } },
    { path: 'playlist', component: PlaylistComponent, data: { title: 'Playlist' } },
    { path: 'albums', component: AlbumsComponent, data: { title: 'Albums' } },
    { path: 'eventsandblog', component: EventsAndBlogComponent, data: { title: 'Events&Blog' } },
    { path: 'about', component: AboutComponent, data: { title: 'About' } },
    { path: 'contact', component: ContactComponent, data: { title: 'Contact' } }
];

export const moduleRoutes = RouterModule.forRoot(routes);