import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarClienteComponent } from './ingresar-cliente.component';

describe('IngresarClienteComponent', () => {
  let component: IngresarClienteComponent;
  let fixture: ComponentFixture<IngresarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
