import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarCheckinOutComponent } from './ingresar-checkin-out.component';

describe('IngresarCheckinOutComponent', () => {
  let component: IngresarCheckinOutComponent;
  let fixture: ComponentFixture<IngresarCheckinOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarCheckinOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarCheckinOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
