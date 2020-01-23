import { Args, Resolver, Query } from '@nestjs/graphql';
import { Pokemon } from './pokemon.model';
import { PokemonService } from './pokemon.service';

@Resolver()
export class PokemonResolver {

  constructor(private pokemonService: PokemonService) {}

  @Query(returns => [Pokemon])
  pokedex(
    @Args('limit') limit: number,
    @Args('offset') offset: number
  ): Promise<Pokemon[]> {
    const params = {
      limit: limit || 20,
      offset: offset || 0
    };
    return this.pokemonService.getPokedex(params);
  }

  @Query(returns => [Pokemon])
  pokedexMock(
    @Args('limit') limit: number,
    @Args('offset') offset: number
  ): Promise<Pokemon[]> {
    const params = {
      limit: limit || 20,
      offset: offset || 0
    };
    return this.pokemonService.getPokedexMock(params);
  }

  @Query(returns => Pokemon)
  pokemon(@Args('id') id: string): Promise<Pokemon> {
    console.log('resolver ran');
    const pokemonID = Number(id);
    const pokemon = this.pokemonService.getPokemon(pokemonID);
    console.log(pokemon);
    return pokemon;
  }
}