import { HttpException, Injectable } from '@nestjs/common';
import { GAMES } from '../../mocks/games.mock';

@Injectable()
export class GamesService {
  games = GAMES;

  getGames(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.games);
    });
  }

  getGame(gameID): Promise<any> {
    let id = Number(gameID);
    return new Promise(resolve => {
      const game = this.games.find(game => game.id === id);
      if (!game) {
        throw new HttpException('Game does not exist', 404);
      }
      resolve(game);
    });
  }

  addGame(game): Promise<any> {
    return new Promise(resolve => {
      this.games.push(game);
      resolve(this.games);
    });
  }

  deleteGame(gameID): Promise<any> {
    let id = Number(gameID);
    return new Promise(resolve => {
      let index = this.games.findIndex(game => game.id === id);
      if (index === -1 ) {
        throw new HttpException('Game does not exist', 404);
      }
      this.games.splice(1, index);
      resolve(this.games);
    });
  }
}
