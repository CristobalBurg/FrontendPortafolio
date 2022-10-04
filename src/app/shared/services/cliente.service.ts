import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/entities.interface.';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = 'http://localhost:8080/api/clientes';

  constructor(private httpClient: HttpClient) { }


  obtenerClientes(): Observable<Cliente[]>{
    let segment = '/listarClientes';
    return this.httpClient.get<Cliente[]>(this.url + segment)

  }

  guardarCliente( nuevoDepto: Cliente): Observable<Cliente>{
    let segment = '';
    return this.httpClient.post<Cliente>(this.url + segment , nuevoDepto)
  }

  borrarCliente( rut: string){
    let segment = '/'  + rut;
    return this.httpClient.delete(this.url + segment)
  }

  editarCliente(cliente: Cliente , rut: string){
    let segment = '/' + rut ;
    return this.httpClient.put(this.url  + segment , cliente )
  }
}
