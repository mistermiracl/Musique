import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RoutesRecognized } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { PlaylistComponent } from "./components/playlist/playlist.component";
import { AlbumsComponent } from "./components/albums/albums.component";
import { EventsAndBlogComponent } from "./components/events&blog/eventsandblog.component";
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  private appTitle: string;

  currentRoute: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
  }

  onRouterActivate(component: any){

    if(component instanceof HomeComponent)
      this.currentRoute = 'home';
    else if(component instanceof PlaylistComponent)
      this.currentRoute = 'playlist';
    else if(component instanceof AlbumsComponent)
      this.currentRoute = 'albums';
    else if(component instanceof EventsAndBlogComponent)
      this.currentRoute = 'eventsandblog';
    else if(component instanceof AboutComponent)
      this.currentRoute = 'about';
    else if(component instanceof ContactComponent)
      this.currentRoute = 'contact';
  }

  //BY USING AFTERVIEWINIT WE MAKE SURE THE DOM IS LOADED AND THEREFORE IS READY
  ngAfterViewInit(): void {

    this.appTitle = this.titleService.getTitle();

    //SUBSCRIBE TO ROUTER EVENTS STREAM SO THAT
    this.router.events.subscribe(ev => {
      //WHENEVER A ROUTE IS RENDERED (NAVIGATION END EVENT)
      if (ev instanceof NavigationEnd) {
        //THE PAGE TITLE IS RENDERED FROM THE DATA ATTRIBUTE OF THE ROUTE
        //FOR SOME REASON WE NEED TO SELECT THE FIRST CHILD INSTEAD OF THE MAIN DATA PROPERTY
        this.activatedRoute.firstChild.data.subscribe(
          data => this.titleService.setTitle(`${this.appTitle} - ${data['title']}`),
          error => console.log(error)
        );
      }

    });
  }

}
