import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {RegisterFirstStepComponent} from "./registration/register-firstStep/register-firstStep.component";
import {LayoutWithHeaderFooterComponent} from "./layout-with-header-footer/layout-with-header-footer.component";
import {
  LayoutWithoutHeaderFooterComponent
} from "./layout-without-header-footer/layout-without-header-footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RegisterFirstStepComponent, LayoutWithHeaderFooterComponent, LayoutWithoutHeaderFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClientP4c';
}
