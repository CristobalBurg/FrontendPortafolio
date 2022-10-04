import { Pipe, PipeTransform } from '@angular/core';
import { Cliente, Departamento } from '../interfaces/entities.interface.';

@Pipe({
  name: 'searchFieldDeptos'
})
export class SearchFieldPipeDeptos implements PipeTransform {

  transform(departamentos: Departamento[], searchValue: string): Departamento[] {
    if(!departamentos || !searchValue){
      return departamentos;
    }
    return departamentos.filter( depto => 
      depto.direccion.toLowerCase().includes(searchValue.toLowerCase()) ||
      depto.comuna.nombre.toLowerCase().includes(searchValue.toLowerCase()) ||
      depto.idDeparamento === Number(searchValue)
      )
  }
}

@Pipe({
  name: 'searchFieldClientes'
})
export class SearchFieldPipeClientes implements PipeTransform {

  transform(clientes: Cliente[], searchValue: string): Cliente[] {
    if(!clientes || !searchValue){
      return clientes;
    }
    return clientes.filter( cliente => 
      cliente.rutCliente.toLowerCase().includes(searchValue.toLowerCase()) ||
      cliente.nombre.toLowerCase().includes(searchValue.toLowerCase()) ||
      cliente.apellido.toLowerCase().includes(searchValue.toLowerCase()) ||
      cliente.correo.toLowerCase().includes(searchValue.toLowerCase()) 
      )
  }
}
