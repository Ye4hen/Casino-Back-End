import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class GameDto {
	@Field(() => String)
	name: string

	@Field(() => String)
	category: string

	@Field(() => String)
	img: string
}

@InputType()
export class GameUpdateDto extends PartialType(GameDto) {
	@Field(() => String)
	id: string;
}