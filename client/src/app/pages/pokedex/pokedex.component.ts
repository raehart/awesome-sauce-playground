import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../modules/pokemon/interface/pokemon.interfaces';
import { PokemonService } from '../../modules/pokemon/service/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokedex: Pokemon[];
  selectedPokemon: Pokemon = null;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokedex();
  }

  getPokedex() {
    this.pokemonService.getPokedex(
      { limit: 80, offset: 200 }
    ).subscribe((pokedex: Pokemon[]) => {
      this.pokedex = pokedex;
      console.log(this.pokedex);
    });
  }

  onSelectPokemon(pokemon) {
    console.log('select pokemon', pokemon);
    this.selectedPokemon = pokemon;
  }
}
