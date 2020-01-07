import { Component, OnInit } from '@angular/core';
import { Apollo, Query } from 'apollo-angular';
import gql from 'graphql-tag';

import { Pokemon } from './pokemon.interfaces';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    return this.apollo.use('pokemon').watchQuery<Query>({
      query: gql`
        query {
          pokemons(first: 9) {
            number
            name
            image
            height {
              minimum
              maximum
            }
            weight {
              minimum
              maximum
            }
            types
            evolutions {
              name
            }
          }
        }
      `
    }).valueChanges.subscribe((result: any) => {
      if (result.data && result.data.pokemons) {
        this.pokemonList = result.data.pokemons;
        console.log(result);
        console.log(this.pokemonList);
      }
    });
  }

}
