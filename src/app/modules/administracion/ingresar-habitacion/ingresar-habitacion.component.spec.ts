import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarHabitacionComponent } from './ingresar-habitacion.component';

describe('IngresarHabitacionComponent', () => {
  let component: IngresarHabitacionComponent;
  let fixture: ComponentFixture<IngresarHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
