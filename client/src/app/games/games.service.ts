import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, Query } from '../types';
import { Apollo } from "apollo-angular";
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private apollo: Apollo) { }

  getGames(): Observable<Game[]> {
    return this.apollo.watchQuery<Query>({
      query: gql`
        query {
          games {
            id
            title
            description
          }
        }
      `
    })
      .valueChanges
      .pipe(
        map(result => result.data.games)
      );
  }
}
