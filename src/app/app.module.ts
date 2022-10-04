import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DepartamentosComponent } from './modules/mantenedores/departamentos/departamentos.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingComponent } from './modules/landing/landing.component';
import { DepartamentoService } from './shared/services/departamento.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFieldPipeClientes, SearchFieldPipeDeptos } from './shared/pipes/search-field.pipe';
import { ClientesComponent } from './modules/mantenedores/clientes/clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    DepartamentosComponent,
    SearchFieldPipeDeptos,
    SearchFieldPipeClientes,
    ClientesComponent,

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
