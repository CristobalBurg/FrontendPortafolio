import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { Cliente } from '../../../shared/interfaces/entities.interface.';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listadoClientes: Cliente[]
  formCrearCliente: FormGroup;
  isUpdate: boolean;
  currentRut: string;
  searchValue: string ;

  @ViewChild('content') public modal: TemplateRef<any>;

  

  constructor(private clienteService: ClienteService , private modalService: NgbModal, private fb:FormBuilder) {
    this.formCrearCliente = this.fb.group({
      rutCliente: new FormControl('',[Validators.required , Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
      nombre: new FormControl('' , [Validators.required , Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
      apellido: new FormControl('',[Validators.required , Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)] ),
      contacto: new FormControl('',[Validators.required , Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
      correo: new FormControl('', [Validators.required , Validators.email]),
    })
   }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(){
    return this.clienteService.obtenerClientes().subscribe( (clientes) => {
      console.log(clientes)
      this.listadoClientes = clientes;
    })
  }



  open(content) {
    console.log(content)
    this.modalService.open(content, {ariaLabelledBy: 'modalCreateCliente'})
  }

  crearCliente(){
    console.log(this.formCrearCliente.value)
    if(this.formCrearCliente.invalid){
      this.formCrearCliente.markAllAsTouched();
    } else {
      this.clienteService.guardarCliente(this.formCrearCliente.value).subscribe( (res) => {
        Swal.fire('OK','Cliente guardado','success')
        this.obtenerClientes();
        this.modalService.dismissAll();
        this.formCrearCliente.reset();
      })
    }
  }

  borrarCliente(rut: string){
    Swal.fire({
      title: 'Quieres borrar el cliente?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'SI',
      denyButtonText: `NO`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.borrarCliente(rut).subscribe( () => {
          Swal.fire('OK', 'Cliente eliminado correctamente', 'info')
          this.obtenerClientes();
        })
      } 
    })
  }

  cargarCliente( cliente :Cliente ){

    this.isUpdate = true;

    this.modalService.open(this.modal, {ariaLabelledBy: 'modalCreateCliente'})

    this.formCrearCliente.get('rutCliente').setValue(cliente.rutCliente);
    this.formCrearCliente.get('nombre').setValue(cliente.nombre);
    this.formCrearCliente.get('apellido').setValue(cliente.apellido);
    this.formCrearCliente.get('contacto').setValue(cliente.contacto);
    this.formCrearCliente.get('correo').setValue(cliente.correo)

    this.currentRut = cliente.rutCliente
  }

  editar(){
    console.log(this.formCrearCliente.value)
    this.clienteService.editarCliente( this.formCrearCliente.value , this.currentRut).subscribe( (x)=> {
      this.obtenerClientes();
      this.modalService.dismissAll();
      this.formCrearCliente.reset();
      this.isUpdate = false;
      Swal.fire('OK','Cliente actualizado correctamente','success')
    })
  }

}
