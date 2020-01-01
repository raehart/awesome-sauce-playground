import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { NewGameInput } from './dto/new-game.input';
import { GamesArgs } from './dto/games.args';
import { Game } from './models/game';
import { GamesService } from './games.service';

const pubSub = new PubSub();

@Resolver(of => Game)
export class GamesResolver {
  constructor(private readonly gamesService: GamesService) {}

  @Query(returns => Game)
  async game(@Args('id') id: string): Promise<Game> {
    const game = await this.gamesService.getGame(id);
    if (!game) {
      throw new NotFoundException(id);
    }
    return game;
  }

  @Query(returns => [Game])
  games(): Promise<Game[]> {
    return this.gamesService.getGames();
  }

  @Mutation(returns => Game)
  async addGame(
    @Args('newGameData') newGameData: NewGameInput,
  ): Promise<Game> {
    const game = await this.gamesService.addGame(newGameData);
    await pubSub.publish('gameAdded', { gameAdded: game });
    return game;
  }

  @Mutation(returns => Boolean)
  async removeGame(@Args('id') id: string) {
    return this.gamesService.deleteGame(id);
  }

  @Subscription(returns => Game)
  gameAdded() {
    return pubSub.asyncIterator('gameAdded');
  }
}