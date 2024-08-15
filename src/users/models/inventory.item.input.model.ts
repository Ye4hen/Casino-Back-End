import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class InventoryItemInput {
	@Field(() => String)
	id: string;

	@Field(() => Int)
	amount: number;
}
