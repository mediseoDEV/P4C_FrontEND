import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFirstStepComponent } from './registration/register-firstStep/register-firstStep.component';
import { IndexComponent } from './index/index.component'; // Import your IndexComponent

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: IndexComponent }, // Define a route for '/home'
  { path: 'register', component: RegisterFirstStepComponent },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
