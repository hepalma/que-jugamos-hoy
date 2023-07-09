import { TestBed } from '@angular/core/testing';
import { PokemonService } from './pokemon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa el módulo HttpClientTestingModule

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Agrega el módulo HttpClientTestingModule aquí
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});