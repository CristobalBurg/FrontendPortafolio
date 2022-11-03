import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptoDosComponent } from './depto-dos.component';

describe('DeptoDosComponent', () => {
  let component: DeptoDosComponent;
  let fixture: ComponentFixture<DeptoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptoDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
