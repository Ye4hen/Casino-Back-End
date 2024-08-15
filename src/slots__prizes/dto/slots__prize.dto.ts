import { InputType, Int, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class SlotsPrizeDto {
	@Field(() => String)
	name: string

	@Field(() => String)
	img_bl: string

	@Field(() => String)
	img_sl: string

	@Field(() => Int)
	number: number
}

@InputType()
export class SlotsPrizeUpdateDto extends PartialType(SlotsPrizeDto) {
	@Field(() => String)
	id: string;
}