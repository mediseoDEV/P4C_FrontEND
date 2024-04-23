import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register-firstStep',
  templateUrl: './register-firstStep.component.html',
  standalone: true,
  styleUrls: ['./register-firstStep.component.css']
})
export class RegisterFirstStepComponent {
  constructor(private router: Router) { }
}
