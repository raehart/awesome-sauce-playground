import { Test, TestingModule } from '@nestjs/testing';
import { GamesService } from './games.service';

import { GAMES } from './games.mock';

describe('GamesService', () => {
  let service: GamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GamesService],
    }).compile();

    service = module.get<GamesService>(GamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a list of all games', async () => {
    const result = await service.getGames();
    expect(result).toBe(GAMES);
  });

  it('should return the right game', async () => {
    const result = await service.getGame(1);
    expect(result).toBe(GAMES[0]);
  });

  it('should add games properly', async () => {
    const newGame = {
      id: 7,
      title: 'Seventh game',
      description: "This is the description for the seventh game"
    };
    await service.addGame(newGame);
    const foundGame = await service.getGame(newGame.id);
    expect(foundGame.id).toBe(7);
  });

  it('should remove games properly', async () => {
    await service.deleteGame(2);
    const result = await service.getGames();
    expect(result.findIndex(r => r.id === 2)).toBe(-1);
  });
});
