import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentosComponent } from './modules/mantenedores/departamentos/departamentos.component';
import { LandingComponent } from './modules/landing/landing.component';
import { ClientesComponent } from './modules/mantenedores/clientes/clientes.component';

const routes: Routes = [
  {path: "", redirectTo: 'landing', pathMatch:'full'},
  {path: 'landing' , component: LandingComponent},
  {path: 'departamentos' , component: DepartamentosComponent},
  {path: 'clientes' , component: ClientesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
