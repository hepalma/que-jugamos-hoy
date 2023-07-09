import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RPGPage } from './rpg.page';

describe('RPGPage', () => {
  let component: RPGPage;
  let fixture: ComponentFixture<RPGPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(RPGPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
