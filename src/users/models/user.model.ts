import { ObjectType, Field, Int, HideField, Float } from '@nestjs/graphql';
import { InventoryItemModel } from './inventory.item.model';
import { BetItemModel } from './bet.model';
import { IsEmail } from 'class-validator';

@ObjectType()
export class UserModel {
	@Field(() => String)
	id: string

	@Field(() => String)
	login: string

	@Field(() => String)
	@IsEmail()
	email: string

	@HideField()
	password: string

	@Field(() => Float, { nullable: true })
	balance: number

	@Field(() => String, { defaultValue: 'https://firebasestorage.googleapis.com/v0/b/course-project-326a3.appspot.com/o/user%2Fcasino-avatar.jpg?alt=media&token=35f4fb67-1de1-43b7-a26a-873983754d12' })
	avatar: string

	@Field(() => [InventoryItemModel], { defaultValue: [] })
	inventory: InventoryItemModel[]

	@Field(() => [BetItemModel], { defaultValue: [] })
	bets: BetItemModel[]

	@Field(() => String, { nullable: true })
	cryptoAccount: string

	@Field(() => Boolean, { nullable: true })
	admin: boolean

	@Field()
	createdAt: Date

	@Field()
	updatedAt: Date
}
