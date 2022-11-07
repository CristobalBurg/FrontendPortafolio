import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarServicioExtraComponent } from './ingresar-servicio-extra.component';

describe('IngresarServicioExtraComponent', () => {
  let component: IngresarServicioExtraComponent;
  let fixture: ComponentFixture<IngresarServicioExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarServicioExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarServicioExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
