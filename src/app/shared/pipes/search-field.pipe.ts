import { Pipe, PipeTransform } from '@angular/core';
import { Departamento } from '../interfaces/entities.interface.';

@Pipe({
  name: 'searchField'
})
export class SearchFieldPipe implements PipeTransform {

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
