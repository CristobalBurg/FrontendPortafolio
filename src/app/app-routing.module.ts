import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentosComponent } from './modules/departamentos/departamentos.component';
import { Navbar2Component } from './shared/navbar2/navbar2.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { HomeComponent } from './modules/home/home.component';
import { FechasComponent } from './modules/fechas/fechas.component';
import { ReservaComponent } from './modules/reserva/reserva.component';
import { TransporteComponent } from './modules/transporte/transporte.component';
import { TourComponent } from './modules/tour/tour.component';
import { AdministracionComponent } from './modules/administracion/administracion.component';
import { IngresarClienteComponent } from './modules/administracion/ingresar-cliente/ingresar-cliente.component';
import { IngresarHabitacionComponent } from './modules/administracion/ingresar-habitacion/ingresar-habitacion.component';
import { IngresarDepartamentoComponent } from './modules/administracion/ingresar-departamento/ingresar-departamento.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';



const routes: Routes = [
  {path: "", redirectTo: '', pathMatch:'full'},
  {path: 'departamentos' , component: DepartamentosComponent},
  {path: 'navbar2' , component: Navbar2Component},
  {path: 'footer' , component: FooterComponent},
  {path: 'servicios' , component: ServiciosComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'fechas' , component: FechasComponent},
  {path: 'reserva' , component: ReservaComponent},
  {path: 'transporte' , component: TransporteComponent},
  {path: 'tour' , component: TourComponent},
  {path: 'administracion' , component: AdministracionComponent},
  {path: 'ingresar-cliente' , component: IngresarClienteComponent},
  {path: 'ingresar-habitacion' , component: IngresarHabitacionComponent},
  {path: 'ingresar-departamento' , component: IngresarDepartamentoComponent},
  {path: 'nosotros', component: NosotrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
