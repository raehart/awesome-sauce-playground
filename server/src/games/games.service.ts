import { HttpException, Injectable } from '@nestjs/common';
import { GAMES } from '../../mocks/games.mock';

const fakeId = () => Math.random().toString(36).substr(2, 5);

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
      const newGame = {
        id: fakeId(),
        ...game
      };
      this.games.push(newGame);
      resolve(newGame);
    });
  }

  deleteGame(gameID): Promise<any> {
    let id = Number(gameID);
    return new Promise(resolve => {
      let index = this.games.findIndex(game => game.id === id);
      if (index === -1 ) {
        resolve(false);
        throw new HttpException('Game does not exist', 404);
      }
      this.games.splice(index, 1);
      resolve(true);
    });
  }
}
