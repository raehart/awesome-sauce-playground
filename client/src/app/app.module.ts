import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared.module';
import { AppRoutingModule } from './app-routing.module';
import { PokemonModule } from './modules/pokemon/pokemon.module';

import { AppComponent } from './app.component';

import {
  LandingComponent,
  KaiaComponent,
  RheaComponent,
  GamesComponent,
  SquanchComponent,
  PokedexComponent,
} from './pages';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    KaiaComponent,
    RheaComponent,
    GamesComponent,
    SquanchComponent,
    PokedexComponent,
  ],
  imports: [
    SharedModule.forRoot(),
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    PokemonModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}
