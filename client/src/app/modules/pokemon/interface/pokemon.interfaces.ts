
interface Ref {
  name: string;
  url: string;
}

export interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: Ref;
}

export interface GameIndex {
  game_index: number;
  version: Ref;
}

export interface SpriteSet {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Ref;
}

export interface Type {
  slot: number;
  type: Ref;
}

export interface Pokemon {
  id: string;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Ref[];
  game_indices: GameIndex[];
  species: Ref;
  sprites: SpriteSet;
  stats: Stat[];
  types: Type[];
}
