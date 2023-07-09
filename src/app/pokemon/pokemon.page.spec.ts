import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonPage } from './pokemon.page';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa el módulo HttpClientTestingModule

describe('PokemonPage', () => {
  let component: PokemonPage;
  let fixture: ComponentFixture<PokemonPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonPage],
      imports: [HttpClientTestingModule] // Agrega el módulo HttpClientTestingModule aquí
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
