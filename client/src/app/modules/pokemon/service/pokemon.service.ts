import { Injectable } from '@angular/core';
import { Apollo, Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private apollo: Apollo) { }

  getPokedex(variables: {limit: number, offset: number} = {limit: 9, offset: 0}) {
    const query = gql`
      query(
        $offset: Float!,
        $limit: Float!
      ) {
        pokedexMock(
          offset: $offset,
          limit: $limit
        ) {
          id
          name
          base_experience
          height
          is_default
          order
          weight
          abilities {
            is_hidden
            slot
            ability {
              name
            }
          }
          game_indices {
            game_index
            version {
              name
            }
          }
          species {
            name
          }
          sprites {
            front_default
          }
          stats {
            base_stat
            effort
            stat {
              name
            }
          }
          types {
            slot
            type {
              name
            }
          }
        }
      }
    `;

    return this.apollo.watchQuery<Query>({
      query, variables
    }).valueChanges.pipe(
      map((result:any) => result.data.pokedexMock),
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    console.error(error);
    return of([]);
  }
}
