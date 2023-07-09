import { TestBed } from '@angular/core/testing';
import { DbService } from './db.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';


describe('DbService', () => {
  let service: DbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SQLite] // Agrega el servicio SQLite como proveedor
    });
    service = TestBed.inject(DbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});





