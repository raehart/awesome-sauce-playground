import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interface/pokemon.interfaces';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }

}
