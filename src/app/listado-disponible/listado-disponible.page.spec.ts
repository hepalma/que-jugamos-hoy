import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoDisponiblePage } from './listado-disponible.page';

describe('ListadoDisponiblePage', () => {
  let component: ListadoDisponiblePage;
  let fixture: ComponentFixture<ListadoDisponiblePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListadoDisponiblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
