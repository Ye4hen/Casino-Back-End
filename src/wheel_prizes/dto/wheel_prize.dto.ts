import { InputType, Int, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class WheelPrizeDto {
	@Field(() => String)
	name: string
}

@InputType()
export class WheelPrizeUpdateDto extends PartialType(WheelPrizeDto) {
	@Field(() => String)
	id: string;
}