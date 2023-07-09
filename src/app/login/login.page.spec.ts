import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { DatabaseService } from '../services/database.service';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let databaseServiceSpy: jasmine.SpyObj<DatabaseService>;
  let sqliteObjectSpy: jasmine.SpyObj<SQLiteObject>;

  beforeEach(() => {
    const spyDatabaseService = jasmine.createSpyObj('DatabaseService', ['setDatabase']);
    const spySQLiteObject = jasmine.createSpyObj('SQLiteObject', ['someMethod']);

    TestBed.configureTestingModule({
      declarations: [LoginPage],
      providers: [
        { provide: DatabaseService, useValue: spyDatabaseService },
        { provide: SQLiteObject, useValue: spySQLiteObject }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    databaseServiceSpy = TestBed.inject(DatabaseService) as jasmine.SpyObj<DatabaseService>;
    sqliteObjectSpy = TestBed.inject(SQLiteObject) as jasmine.SpyObj<SQLiteObject>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});