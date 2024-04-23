import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFirstStepComponent } from './registration/register-firstStep/register-firstStep.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' ,
    data: { layout: 'withHeaderFooter' } // Specify the layout for this route
  },
  {
    path: 'register',
    component: RegisterFirstStepComponent,
    data: { layout: 'withoutHeaderFooter' } // Specify the layout for this route
  }
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
