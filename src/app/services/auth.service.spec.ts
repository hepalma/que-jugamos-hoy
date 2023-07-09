import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { DatabaseService } from './database.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseService, SQLite],});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
