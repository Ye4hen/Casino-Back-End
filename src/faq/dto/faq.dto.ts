import { InputType, Int, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class FaqDto {
	@Field(() => String)
	answer: string

	@Field(() => Boolean, { nullable: true, defaultValue: false })
	isOpen?: boolean

	@Field(() => String)
	question: string
}

@InputType()
export class FaqUpdateDto extends PartialType(FaqDto) {
	@Field(() => String)
	id: string;
}