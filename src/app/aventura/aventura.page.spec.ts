import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AventuraPage } from './aventura.page';

describe('AventuraPage', () => {
  let component: AventuraPage;
  let fixture: ComponentFixture<AventuraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AventuraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
