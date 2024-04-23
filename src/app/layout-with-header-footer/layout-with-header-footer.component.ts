import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout-with-header-footer',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent,
        RouterOutlet
    ],
  templateUrl: './layout-with-header-footer.component.html',
  styleUrl: './layout-with-header-footer.component.css'
})
export class LayoutWithHeaderFooterComponent {

}
