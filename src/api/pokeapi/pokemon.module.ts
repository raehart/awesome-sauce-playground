import { HttpModule, HttpService, Module } from '@nestjs/common';
import { PokemonResolver } from './pokemon.resolver';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';


@Module({
  imports: [ HttpModule ],
  controllers: [ PokemonController ],
  providers: [ PokemonService, PokemonResolver ],
  exports: [],
})
export class PokemonModule {}