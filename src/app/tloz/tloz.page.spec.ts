import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TlozPage } from './tloz.page';

describe('TlozPage', () => {
  let component: TlozPage;
  let fixture: ComponentFixture<TlozPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TlozPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
