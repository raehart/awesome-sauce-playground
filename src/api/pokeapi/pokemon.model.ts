import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
class Ref {
  @Field() name: string;
  @Field() url: string;
}

@ObjectType()
export class Ability {
  @Field() is_hidden: boolean;
  @Field() slot: number;
  @Field() ability: Ref;
}

@ObjectType()
export class GameIndex {
  @Field() game_index: number;
  @Field() version: Ref;
}

@ObjectType()
export class SpriteSet {
  @Field() front_default: string;
  @Field() front_female: string;
  @Field() front_shiny: string;
  @Field() front_shiny_female: string;
  @Field() back_default: string;
  @Field() back_female: string;
  @Field() back_shiny: string;
  @Field() back_shiny_female: string;
}

@ObjectType()
export class Stat {
  @Field() base_stat: number;
  @Field() effort: number;
  @Field() stat: Ref;
}

@ObjectType()
export class Type {
  @Field() slot: number;
  @Field() type: Ref;
}

@ObjectType()
export class Pokemon {
  @Field(type => ID) id: string;
  @Field() name: string;
  @Field() base_experience: number;
  @Field() height: number;
  @Field() is_default: boolean;
  @Field() order: number;
  @Field() weight: number;
  @Field(type => [Ability]) abilities: Ability[];
  @Field( type => [Ref]) forms: Ref[];
  @Field( type => [GameIndex]) game_indices: GameIndex[];
  @Field(type => Ref) species: Ref;
  @Field(type => SpriteSet) sprites: SpriteSet;
  @Field(type => [Stat]) stats: Stat[];
  @Field(type => [Type]) types: Type[];
}