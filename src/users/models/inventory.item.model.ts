import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class InventoryItemModel {
	@Field(() => String)
	id: string;

	@Field(() => Int)
	amount: number;
}
