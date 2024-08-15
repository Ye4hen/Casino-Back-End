import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BetItemModel {
	@Field(() => String)
	id: string;

	@Field(() => String)
	coinId: string;

	@Field(() => String)
	gameId: string;

	@Field(() => Int)
	bet: number;
}
