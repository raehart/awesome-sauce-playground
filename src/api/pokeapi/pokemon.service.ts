import { HttpService, Injectable } from '@nestjs/common';
import { Pokemon } from './pokemon.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { pokedex } from './pokemon.mock';

@Injectable()
export class PokemonService {
  pokedex: any[];
  pokemon: Pokemon;

  constructor(private httpService: HttpService) {
    this.pokedex = pokedex;
  }

  getPokedexMock(params = { limit: 20, offset: 0 }): Promise<Pokemon[]> {
    return new Promise((resolve) => {
      const { offset, limit } = params;
      console.log(offset, limit);
      // console.log(this.pokedex);
      resolve(this.pokedex.slice(offset, limit + offset));
    })
  }

  getPokedex(params = { limit: 20, offset: 0 }): Promise<Pokemon[]> {
    return this.httpService.get(
      `http://localhost/api/v2/pokemon`,
      { params }
    ).pipe(
      map(response => response.data.results),
      catchError(this.handleError)
    ).toPromise();
  }

  async getPokemon(id): Promise<Pokemon> {
    console.log('service ran');
    return this.httpService.get(`http://localhost/api/v2/pokemon/${id}/`).pipe(
      map(response => response.data),
      // tap(pokemon => console.log(pokemon)),
      catchError(this.handleError)
    ).toPromise();
  }

  handleError(error) {
    console.error(error);
    return throwError(error);
  }
}
