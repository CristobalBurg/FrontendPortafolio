import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentosComponent } from './modules/departamentos/departamentos.component';
import { Navbar2Component } from './shared/navbar2/navbar2.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { HomeComponent } from './modules/home/home.component';
import { FechasComponent } from './modules/fechas/fechas.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';

const routes: Routes = [
  {path: "", redirectTo: 'checkout', pathMatch:'full'},
  {path: 'departamentos' , component: DepartamentosComponent},
  {path: 'navbar2' , component: Navbar2Component},
  {path: 'footer' , component: FooterComponent},
  {path: 'servicios' , component: ServiciosComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'fechas' , component: FechasComponent},
  {path: 'checkout' , component: CheckoutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
