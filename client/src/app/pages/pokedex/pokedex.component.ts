import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../modules/pokemon/interface/pokemon.interfaces';
import { PokemonService } from '../../modules/pokemon/service/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokemonList: Pokemon[];
  pokedex: any[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokedex();
  }

  getPokedex() {
    this.pokemonService.getPokedex().subscribe((result: any) => {
      if (result.data && result.data.pokedexMock) {
        this.pokemonList = result.data.pokedexMock;
        console.log(result);
        console.log(this.pokemonList);
      }
    });
  }
}
