import { Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserModel } from './models/user.model';
import { UsersCreateDto, UsersUpdateDto } from './dto/user.dto';
import { BaseResolver } from 'src/common/base.resolver';

@Resolver(() => UserModel)
export class UsersResolver extends BaseResolver(
	UserModel,
	UsersCreateDto,
	UsersUpdateDto,
	'createUser',
	'users',
	'user',
	'updateUser',
	'removeUser'
) {
	constructor(private readonly usersService: UsersService) {
		super(usersService);
	}
}