import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimationComponent } from './estimation/estimation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Estimation', component: EstimationComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

