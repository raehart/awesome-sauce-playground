export type Game = {
  id: string;
  title: string;
  description?: string;
}

export type Query = {
  game: Game;
  games: Game[];
}
