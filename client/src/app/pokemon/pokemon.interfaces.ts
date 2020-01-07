export interface Pokemon {
  id: number;
  number: string;
  name: string;
  weight: {
    maximum: string;
    minimum: string;
  };
  height: {
    maximum: string;
    minimum: string;
  };
  classification: string;
  types: [string];
  resistant: [string];
  attacks: {
    fast: {
      name: string;
      type: string;
      damage: number;
    };
    slow: {
      name: string;
      type: string;
      damage: number;
    }
  };
  weaknesses: [string];
  fleeRate: number;
  maxCP: number;
  evolutions: [Pokemon];
  evolutionRequirements: {
    amount: string;
    name: string;
  };
  maxHP: number;
  image: string;
}
