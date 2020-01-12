import { NgModule } from '@angular/core';
import { ApolloModule, Apollo } from 'apollo-angular';
import { ModuleWithProviders } from '@angular/core';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    ApolloModule,
    HttpLinkModule,
    HttpClientModule
  ],
  exports: [ApolloModule],
  providers: [],
  entryComponents: []
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }

  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
  ) {
    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:3000/graphql' }),
      cache: new InMemoryCache()
    });
    apollo.create({
      link: httpLink.create({ uri: 'https://rickandmortyapi.com/graphql' }),
      cache: new InMemoryCache()
    }, 'rickandmorty');

    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:61202/' }),
      cache: new InMemoryCache()
    }, 'starwars');
  }
}
