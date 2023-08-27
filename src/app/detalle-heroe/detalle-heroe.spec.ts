import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHeroeComponent } from './detalle-heroe.component';

describe('DetalleHeroeComponent', () => {
  let component: DetalleHeroeComponent;
  let fixture: ComponentFixture<DetalleHeroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleHeroeComponent]
    });
    fixture = TestBed.createComponent(DetalleHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
