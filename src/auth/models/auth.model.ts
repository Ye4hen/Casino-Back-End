import { ObjectType, Field } from '@nestjs/graphql';
import { AuthDto } from '../dto/auth.dto';
import { MinLength } from 'class-validator';
import { UserModel } from 'src/users/models/user.model';

@ObjectType()
export class AuthModel extends UserModel {
	// @Field(() => String)
	// login: string

	// @Field(() => String)
	// email: string

	@MinLength(6, {
		message: 'Password cannot be less than 6 characters!'
	})
	@Field(() => String)
	declare password: string

	@Field(() => String, { nullable: true })
	accessToken?: string
}
