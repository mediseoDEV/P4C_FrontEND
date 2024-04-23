import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-register-firstStep',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './register-firstStep.component.html',
  styleUrl: './register-firstStep.component.css'
})
export class RegisterFirstStepComponent {
  constructor(private router: Router) { }

}
