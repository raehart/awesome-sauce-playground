import { Component, OnInit } from '@angular/core';
import { Apollo, Query } from 'apollo-angular';
import gql from 'graphql-tag';

interface Starship {
  name: string;
  model: string;
  starshipClass: string;
  passengers: string;
  cargoCapacity: number;
  maxAtmospheringSpeed: number;
}

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.scss']
})
export class StarwarsComponent implements OnInit {
  starships: Starship[] = [];
  luckyNum: number;
  luckyShip: Starship;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.getStarships();
  }

  getStarships() {
    return this.apollo.use('starwars').watchQuery<Query>({
      query: gql`
        query {
          allStarships {
            totalCount
            edges {
              node {
                name
                model
                starshipClass
                passengers
                cargoCapacity
                maxAtmospheringSpeed
              }
            }
          }
        }
      `
    }).valueChanges.subscribe((results: any) => {
      if (results.data && results.data.allStarships) {
        this.starships = results.data.allStarships.edges.map(s => s.node);
        this.getStarship();
      }
    }, (error) => console.error(error));
  }

  generateLuckyNumber() {
    this.luckyNum = Math.floor(Math.random() * 37);
  }

  getStarship() {
    this.generateLuckyNumber();
    this.luckyShip = this.starships[this.luckyNum];
    console.log('YOUR LUCKY SHIP IS:', this.luckyShip);
  }
}
