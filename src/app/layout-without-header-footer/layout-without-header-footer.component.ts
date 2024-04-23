import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout-without-header-footer',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './layout-without-header-footer.component.html',
  styleUrl: './layout-without-header-footer.component.css'
})
export class LayoutWithoutHeaderFooterComponent {

}
