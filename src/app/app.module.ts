import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DepartamentosComponent } from './modules/departamentos/departamentos.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DepartamentoService } from './shared/services/departamento.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFieldPipeClientes, SearchFieldPipeDeptos } from './shared/pipes/search-field.pipe';
import { Navbar2Component } from './shared/navbar2/navbar2.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { HomeComponent } from './modules/home/home.component';
import { FechasComponent } from './modules/fechas/fechas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DepartamentosComponent,
    SearchFieldPipeDeptos,
    SearchFieldPipeClientes,
    Navbar2Component,
    ServiciosComponent,
    HomeComponent,
    FechasComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    DepartamentoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
