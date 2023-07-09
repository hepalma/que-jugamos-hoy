import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationPage } from './registration.page';
import { DatabaseService } from '../services/database.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';


describe('RegistrationPage', () => {
  let component: RegistrationPage;
  let fixture: ComponentFixture<RegistrationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationPage],
      providers: [DatabaseService, SQLite] // Agrega el servicio DatabaseService como proveedor aquí
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

