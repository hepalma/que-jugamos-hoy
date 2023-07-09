import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoDisponiblePage } from './listado-disponible.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ListadoDisponiblePage', () => {
  let component: ListadoDisponiblePage;
  let fixture: ComponentFixture<ListadoDisponiblePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [SQLite],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoDisponiblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
