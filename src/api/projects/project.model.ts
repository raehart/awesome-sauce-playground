import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Project {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}