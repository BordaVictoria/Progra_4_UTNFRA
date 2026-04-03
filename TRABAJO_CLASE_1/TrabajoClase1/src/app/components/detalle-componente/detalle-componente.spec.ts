import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleComponente } from './detalle-componente';

describe('DetalleComponente', () => {
  let component: DetalleComponente;
  let fixture: ComponentFixture<DetalleComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
