import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Pokemon } from '../../interface/pokemon.interfaces';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Output() selectPokemon = new EventEmitter<Pokemon>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.selectPokemon.emit(this.pokemon);
  }
}
