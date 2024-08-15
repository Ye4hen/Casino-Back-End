import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SlotsPrizeModel {
	@Field(() => String)
	id: string

	@Field(() => String)
	name: string

	@Field(() => String)
	img_bl: string

	@Field(() => String)
	img_sl: string

	@Field(() => Int)
	number: number

	@Field()
	createdAt: Date

	@Field()
	updatedAt: Date
}
