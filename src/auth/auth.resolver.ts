import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { AuthModel } from './models/auth.model';

@Resolver(() => AuthModel)
export class AuthResolver {
	constructor(private readonly authService: AuthService) { }

	@Mutation(() => AuthModel) // Define the return type as AuthDto
	async login(@Args('loginInput') dto: AuthDto) {
		return this.authService.login(dto);
	}

	@Mutation(() => AuthModel) // Define the return type as AuthDto
	async register(@Args('registerInput') dto: AuthDto) {
		return this.authService.register(dto);
	}
}
