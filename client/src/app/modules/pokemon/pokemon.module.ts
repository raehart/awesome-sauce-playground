import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent, PokemonDetailComponent } from './component';

@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonDetailComponent,
  ],
  exports: [
    PokemonCardComponent,
    PokemonDetailComponent,
  ],
  entryComponents: [
    PokemonCardComponent,
    PokemonDetailComponent,
  ],
  imports: [ CommonModule ],
  providers: [],
  bootstrap: []
})
export class PokemonModule {
  constructor() {}
}
