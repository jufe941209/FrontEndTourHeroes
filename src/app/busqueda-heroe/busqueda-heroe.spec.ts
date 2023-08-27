import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaHeroeComponent } from './busqueda-heroe.component';

describe('BusquedaHeroeComponent', () => {
  let component: BusquedaHeroeComponent;
  let fixture: ComponentFixture<BusquedaHeroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaHeroeComponent]
    });
    fixture = TestBed.createComponent(BusquedaHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
