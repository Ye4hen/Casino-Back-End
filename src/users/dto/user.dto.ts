import { InputType, Field, Float, PartialType } from '@nestjs/graphql';
import { BetItemInput } from '../models/bet.input.model';
import { InventoryItemInput } from '../models/inventory.item.input.model';
import { IsEmail, MinLength } from 'class-validator';

@InputType()
export class UsersCreateDto {
	@Field(() => String)
	login: string;

	@Field(() => String)
	@IsEmail()
	email: string;

	@MinLength(6, {
		message: 'Password cannot be less than 6 characters!'
	})
	@Field(() => String)
	password: string;

	@Field(() => Float, { nullable: true })
	balance?: number;

	@Field(() => String, {
		defaultValue:
			'https://firebasestorage.googleapis.com/v0/b/course-project-326a3.appspot.com/o/user%2Fcasino-avatar.jpg?alt=media&token=35f4fb67-1de1-43b7-a26a-873983754d12',
	})
	avatar?: string;

	@Field(() => [InventoryItemInput], { defaultValue: [] })
	inventory?: InventoryItemInput[];

	@Field(() => [BetItemInput], { defaultValue: [] })
	bets?: BetItemInput[];

	@Field(() => String, { nullable: true })
	cryptoAccount?: string;

	@Field(() => Boolean, { nullable: true })
	admin?: boolean;
}

@InputType()
export class UsersUpdateDto extends PartialType(UsersCreateDto) {
	@Field(() => String)
	id: string;
}
