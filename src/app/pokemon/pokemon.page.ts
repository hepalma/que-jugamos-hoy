import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  "names": string;
  "nombre": string;
  "urlImage": string;
  "urlImage2": string;
  "urlImage3": string;
  "urlImage4": string;
  "Npokedex": number;
  "art": string;
  pokemonTypes: string[] = [];

  constructor(private pokemonService : PokemonService) { }

  ngOnInit() {
  }

  convertToLowerCase(value: string) {
    this.names = value.toLowerCase();
  }

  search(){
    this.pokemonService.getPokemon(this.names).subscribe((data:any) => {
      this.urlImage = data.sprites.front_default
      this.urlImage2 = data.sprites.back_default
      this.urlImage3 = data.sprites.front_shiny
      this.urlImage4 = data.sprites.back_shiny
      this.Npokedex = data.id
      this.nombre = data.name
      this.pokemonTypes = data.types.map((type: any) => type.type.name);

    })
  }

}
