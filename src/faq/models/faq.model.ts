import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class FaqModel {
	@Field(() => String)
	id: string

	@Field(() => String)
	answer: string

	@Field(() => Boolean, { nullable: true, defaultValue: false })
	isOpen?: boolean

	@Field(() => String)
	question: string

	@Field()
	createdAt: Date

	@Field()
	updatedAt: Date
}
