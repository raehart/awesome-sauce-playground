import { Component, OnInit } from '@angular/core';
import { Game } from '../../types';
import { GamesService } from './games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games: Game[];

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.gamesService.getGames().subscribe(games => {
      console.log(games);
      this.games = games;

    });
  }

}
