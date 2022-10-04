import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentosComponent } from './modules/departamentos/departamentos.component';
import { LandingComponent } from './modules/landing/landing.component';

const routes: Routes = [
  {path: "", redirectTo: 'landing', pathMatch:'full'},
  {path: 'landing' , component: LandingComponent},
  {path: 'departamentos' , component: DepartamentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
