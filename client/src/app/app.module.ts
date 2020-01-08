import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { KaiaComponent } from './kaia/kaia.component';
import { RheaComponent } from './rhea/rhea.component';
import { GamesComponent } from './games/games.component';
import { SquanchComponent } from './squanch/squanch.component';
import { StarwarsComponent } from './starwars/starwars.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    KaiaComponent,
    RheaComponent,
    GamesComponent,
    SquanchComponent,
    StarwarsComponent,
  ],
  imports: [
    SharedModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}
