import { Component, OnInit } from '@angular/core';
import { Apollo, Query } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-kaia-home',
  templateUrl: './kaia-home.component.html',
  styleUrls: ['./kaia-home.component.scss']
})
export class KaiaHomeComponent implements OnInit {
  characters = [];

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    return this.apollo.use('rickandmorty').watchQuery<Query>({
      query: gql`
        query {
            characters {
              results {
                id
                name
                image
                location {
                  name
                }
              }
            }
        }
      `
    }).valueChanges.subscribe((result: any) => {
      if (result.data && result.data.characters) {
        this.characters = result.data.characters.results;
      }
    });
  }

}
