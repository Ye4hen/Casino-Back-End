import { InputType, Field, HideField } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
import { UsersCreateDto } from 'src/users/dto/user.dto';

@InputType()
export class AuthDto extends UsersCreateDto {
	// @Field(() => String)
	// declare login: string

	// @Field(() => String)
	// declare email: string

	// @MinLength(6, {
	// 	message: 'Password cannot be less than 6 characters!'
	// })
	// @Field(() => String)
	// declare password: string
	@Field(() => String, { nullable: true })
	accessToken?: string
}
