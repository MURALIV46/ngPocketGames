import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private router: Router){}
  title = 'pocketGames';
  backgroundColor = '#143240';  // default color
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const route = event.urlAfterRedirects.split('/')[1];

        // Clear old theme classes
        document.body.className = '';

        // Add class based on route
        document.body.classList.add(`page-${route}`);
      }
    });
  }
}
