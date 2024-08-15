import { Field, Float, InputType, PartialType } from "@nestjs/graphql";

@InputType()
export class CoinDto {
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
}

@InputType()
export class CoinUpdateDto extends PartialType(CoinDto) {
	@Field(() => String)
	id: string;
}