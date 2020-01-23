import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from "path";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './api/books/books.module';
import { GamesModule } from './api/games/games.module';
import { ProjectsModule } from './api/projects/projects.module';
import { PokemonModule } from './api/pokeapi/pokemon.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      // mocks: true,
      playground: {
        endpoint: 'graphql'
      }
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client/dist'),
      renderPath: '^((?!graphql).)*$',
    }),
    BooksModule,
    GamesModule,
    ProjectsModule,
    PokemonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
