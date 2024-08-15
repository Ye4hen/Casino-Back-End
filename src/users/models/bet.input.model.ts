import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class BetItemInput {
	@Field(() => String)
	id: string;

	@Field(() => String)
	coinId: string;

	@Field(() => String)
	gameId: string;

	@Field(() => Int)
	bet: number;
}
