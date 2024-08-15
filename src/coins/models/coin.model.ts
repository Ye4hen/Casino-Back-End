import { Field, Float, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CoinModel {
	@Field(() => String)
	id: string

	@Field(() => String)
	name: string

	@Field(() => String)
	desc: string

	@Field(() => String)
	category: string

	@Field(() => Float)
	price: number

	@Field(() => String)
	img: string

	@Field()
	createdAt: Date

	@Field()
	updatedAt: Date
}