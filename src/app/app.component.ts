import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {RegisterFirstStepComponent} from "./registration/register-firstStep/register-firstStep.component";
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RegisterFirstStepComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ClientP4c';
  showHeader: boolean = true;
  showFooter: boolean = true;
  constructor(private router: Router) {
    // Listen for route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check the current route and set showHeader accordingly
        this.showHeader = this.shouldShowHeader(event.url);
        this.showFooter = this.shouldShowFooter(event.url);

      }
    });
  }

  shouldShowHeader(url: string): boolean {
    // Check if the URL matches a page where the header should be shown
    return !(url === '/register' || url === '/login');
  }
  shouldShowFooter(url: string): boolean {
    // Check if the URL matches a page where the header should be shown
    return !(url === '/register' || url === '/login');
  }
}

