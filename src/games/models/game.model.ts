import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class GameModel {
	@Field(() => String)
	id: string

	@Field(() => String)
	name: string

	@Field(() => String)
	category: string

	@Field(() => String)
	img: string

	@Field()
	createdAt: Date

	@Field()
	updatedAt: Date
}
