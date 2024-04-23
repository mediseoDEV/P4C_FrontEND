import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header', // Adjust the selector if necessary
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Component logic if needed
}
