import { Controller, Param, Body, Query, Get, Post, Delete } from '@nestjs/common';
import { GamesService } from "./games.service";
import { CreateGameDTO } from './dto/create-game.dto';

@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) { }

  @Get()
  async getGames() {
    const games = await this.gamesService.getGames();
    return games;
  }

  @Get(':gameID')
  async getGame(@Param('gameID') gameID) {
    const game = this.gamesService.getGame(gameID);
    return game;
  }

  @Post()
  async addGame(@Body() createGameDTO: CreateGameDTO ) {
    const game = this.gamesService.addGame(createGameDTO);
    return game;
  }

  @Delete()
  async deleteGame(@Query() query) {
    const games = await this.gamesService.deleteGame(query.gameID);
    return games;
  }
}
