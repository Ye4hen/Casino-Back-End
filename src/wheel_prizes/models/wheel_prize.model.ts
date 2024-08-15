import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class WheelPrizeModel {
	@Field(() => String)
	id: string

	@Field(() => String)
	name: string
}
