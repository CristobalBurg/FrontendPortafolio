import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Comuna, Departamento } from 'src/app/shared/interfaces/entities.interface.';
import { DepartamentoService } from '../../../shared/services/departamento.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  listadoDepartamentos: Departamento[];
  listadoComunas: Comuna[];
  formCrearDepto : FormGroup;
  isUpdate: boolean = false;
  currentDeptoId: number = 0;
  searchValue: string ;
  fotoSeleccionada: File;
  @ViewChild('content') public modal: TemplateRef<any>;



  constructor(private deptoService: DepartamentoService , private modalService: NgbModal, private fb:FormBuilder) {
    this.formCrearDepto = this.fb.group({
      direccion: new FormControl('',[Validators.required , Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
      ctdHabitaciones: new FormControl(1 , [Validators.required , Validators.min(1)]),
      ctdBanos: new FormControl(1,[Validators.required , Validators.min(1)] ),
      valorArriendoDia: new FormControl(30000,[Validators.required , Validators.min(30000)]),
      politicasCondiciones: new FormControl('', [Validators.required , Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
      comuna: new FormControl( '', [Validators.required])
    })
  }

  ngOnInit(): void {

    this.obtenerDepartamentos();
    this.obtenerComunas();
  }

  obtenerDepartamentos(){
    return this.deptoService.obtenerDepartamentos().subscribe( (deptos) => {
      console.log(deptos)
      this.listadoDepartamentos = deptos;
    })
  }

  obtenerComunas(){
    return this.deptoService.obtenerComunas().subscribe( (comuna) => {
      this.listadoComunas = comuna;
      console.log(this.listadoComunas)
      this.formCrearDepto.controls['comuna'].setValue(this.listadoComunas[85], {onlySelf: true});
    })
  }

  open(content) {

    console.log(content)
    this.modalService.open(content, {ariaLabelledBy: 'modalCreate'})
  }

  crearDepartamento(){
    console.log(this.formCrearDepto.value)
    if(this.formCrearDepto.invalid){
      this.formCrearDepto.markAllAsTouched();
    } else {
      this.deptoService.guardarDepartamento(this.formCrearDepto.value).subscribe( (res) => {
        Swal.fire('OK','Departamento guardado','success')
        this.obtenerDepartamentos();
        this.modalService.dismissAll();
        this.formCrearDepto.reset();
      })
    }
  }

  borrarDepartamento(idDepartamento: number){
    Swal.fire({
      title: 'Quieres borrar el departamento?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'SI',
      denyButtonText: `NO`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.deptoService.borrarDepartamento(idDepartamento).subscribe( () => {
          Swal.fire('OK', 'Departamento eliminado correctamente', 'info')
          this.obtenerDepartamentos();
        })
      } 
    })
  }

  cargarDepartamento( departamento :Departamento ){

    this.isUpdate = true;

    this.modalService.open(this.modal, {ariaLabelledBy: 'modalCreate'})

    this.formCrearDepto.get('direccion').setValue(departamento.direccion);
    this.formCrearDepto.controls['comuna'].setValue(this.listadoComunas.filter( (x) => x.idComuna === departamento.comuna.idComuna)[0], {onlySelf: true});
    this.formCrearDepto.get('direccion').setValue(departamento.direccion);
    this.formCrearDepto.get('ctdHabitaciones').setValue(departamento.ctdHabitaciones);
    this.formCrearDepto.get('ctdBanos').setValue(departamento.ctdBanos);
    this.formCrearDepto.get('politicasCondiciones').setValue(departamento.politicasCondiciones)

    this.currentDeptoId = departamento.idDeparamento


  }

  editar(){
    console.log(this.formCrearDepto.value)
    this.deptoService.editarDepartamento( this.formCrearDepto.value , this.currentDeptoId).subscribe( (x)=> {
      this.obtenerDepartamentos();
      this.modalService.dismissAll();
      this.formCrearDepto.reset();
      this.isUpdate = false;
      Swal.fire('OK','Departamento actualizado correctamente','success')
    })
  }

  seleccionarFoto(event , id){
    this.fotoSeleccionada = event.target.files[0];
    if (this.fotoSeleccionada.type.indexOf('image') < 0 ){
      Swal.fire('Error Upload', 'Seleccione un archivo de imagen', 'error')
      this.fotoSeleccionada = null
    }
    if (!this.fotoSeleccionada){
      Swal.fire('Error','Debe seleccionar una foto','error')
    } else {
      this.deptoService.subirFoto( this.fotoSeleccionada , id).subscribe( (x) => {
        console.log(x)
        this.obtenerDepartamentos();
      })
    }

  }


}
