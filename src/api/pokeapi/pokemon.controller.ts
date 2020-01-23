import { Controller, Param, Get } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('api/pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) { }

  @Get()
  async getPokedex() {
    const pokedex = await this.pokemonService.getPokedex();
    return pokedex;
  }

  @Get(':id')
  async getPokemon(@Param('id') id) {
    console.log('controller ran');
    id = Number(id);
    const pokemon = await this.pokemonService.getPokemon(id);
    return pokemon;
  }

}
