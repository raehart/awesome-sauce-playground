import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { GamesResolver } from "./games.resolver";

@Module({
  controllers: [GamesController],
  providers: [GamesService, GamesResolver],
  exports: [GamesService]
})
export class GamesModule {}
