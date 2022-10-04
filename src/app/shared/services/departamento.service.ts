import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Comuna, Departamento } from '../interfaces/entities.interface.';
import { Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { map, catchError  } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  url: string = 'http://localhost:8080/api/departamentos';

  constructor(private httpClient: HttpClient) { }


  obtenerDepartamentos(): Observable<Departamento[]>{
    let segment = '/listarDepartamentos';
    return this.httpClient.get<Departamento[]>(this.url + segment)

  }

  obtenerComunas(): Observable<Comuna[]>{
    let segment = '/listarComunas';
    return this.httpClient.get<Comuna[]>(this.url + segment)
  }

  guardarDepartamento( nuevoDepto: Departamento): Observable<Departamento>{
    let segment = '';
    return this.httpClient.post<Departamento>(this.url + segment , nuevoDepto)
  }

  borrarDepartamento( id: number){
    let segment = '/'  + id.toString();
    return this.httpClient.delete(this.url + segment)
  }

  editarDepartamento(departamento: Departamento , id: number){
    let segment = '/'  + id.toString();
    return this.httpClient.put(this.url  + segment , departamento )
  }

  subirFoto(archivo: File , id: string){
    let formData = new FormData();
    let segment = '/upload'
    formData.append("archivo", archivo);
    formData.append("id",id)
    return this.httpClient.post(this.url + segment , formData).pipe(
      map( (res: any) => res.departamento as Departamento),
      catchError( e =>{
        console.error(e.error.mensaje);
        Swal.fire("Error",e.error.error,'error')
        return throwError(e);
      })
    )
  }
}
