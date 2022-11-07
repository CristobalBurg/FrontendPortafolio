import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarDepartamentoComponent } from './ingresar-departamento.component';

describe('IngresarDepartamentoComponent', () => {
  let component: IngresarDepartamentoComponent;
  let fixture: ComponentFixture<IngresarDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
