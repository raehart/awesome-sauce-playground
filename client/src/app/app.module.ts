import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { KaiaComponent } from './kaia/kaia.component';
import { RheaComponent } from './rhea/rhea.component';
import { GamesComponent } from './games/games.component';
import { SquanchComponent } from './squanch/squanch.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    KaiaComponent,
    RheaComponent,
    GamesComponent,
    SquanchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:3000/graphql' }),
      cache: new InMemoryCache()
    });
    apollo.create({
      link: httpLink.create({ uri: 'https://rickandmortyapi.com/graphql' }),
      cache: new InMemoryCache()
    }, 'rickandmorty')
  }
}
