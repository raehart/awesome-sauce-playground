import { Test, TestingModule } from '@nestjs/testing';
import { GamesController } from './games.controller';
import { GamesService } from "./games.service";

import { GAMES } from './games.mock';

describe('Games Controller', () => {
  let controller: GamesController;

  const response = {
    send: (body?: any) => { },
    status: (code: number) => response,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GamesController],
      providers: [GamesService]
    }).compile();

    controller = module.get<GamesController>(GamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getGames', () => {
    it('should return an array of games', async () => {
      expect(await controller.getGames()).toBe(GAMES);
    });
  });

  describe('getGame', () => {
    it('should return the right game', async () => {
      expect(await controller.getGame(1)).toBe(GAMES[0]);
    });
  });

  describe('addGame', () => {
    it('should properly add a game', async () => {
      const newGame = {
        id: 99,
        title: 'Added Game',
        description: 'Added game for testing'
      };
      await controller.addGame(newGame);
      const game = await controller.getGame(99);
      expect(game.id).toBe(99);
    });
  });

  describe('deleteGame', () => {
    it('should delete a game', async () => {
      await controller.deleteGame({gameID: 1});
      await expect(controller.getGame(1)).rejects.toThrow();
    });
  });
});
