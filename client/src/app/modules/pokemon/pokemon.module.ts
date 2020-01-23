import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './component';

@NgModule({
  declarations: [
    PokemonCardComponent,
  ],
  exports: [
    PokemonCardComponent,
  ],
  entryComponents: [
    PokemonCardComponent
  ],
  imports: [ CommonModule ],
  providers: [],
  bootstrap: []
})
export class PokemonModule {
  constructor() {}
}
