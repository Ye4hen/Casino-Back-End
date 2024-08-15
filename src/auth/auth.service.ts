import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, genSalt, hash } from 'bcryptjs';
import { AuthDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma.service'; // Import PrismaService
import { UserModel } from '@prisma/client'; // Import User model

@Injectable()
export class AuthService {
	constructor(
		private readonly prisma: PrismaService, // Inject PrismaService
		private readonly jwtService: JwtService
	) { }

	async login(dto: AuthDto) {
		const user = await this.validateUser(dto);
		// const loggedInUser = {

		// 	accessToken: await this.issueAccessToken(String(user.id)),
		// }
		// return Object.assign(loggedInUser, user)
		return user
		// return {
		// 	user,
		// 	accessToken: await this.issueAccessToken(String(user.id)),
		// };
	}

	async register(dto: AuthDto) {
		if (dto.password.length < 6) throw new BadRequestException('Password should be at least 6 characters long');

		const oldUser = await this.prisma.userModel.findFirst({
			where: {
				OR: [
					{ login: dto.login },
					{ email: dto.email },
				]
			},
		});
		if (oldUser) throw new BadRequestException('User with this email or login is already in the system');

		const salt = await genSalt(10);

		const user = await this.prisma.userModel.create({
			data: {
				login: dto.login,
				email: dto.email,
				password: await hash(dto.password, salt),
				balance: dto.balance,
				avatar: dto.avatar,
				cryptoAccount: dto.cryptoAccount,
				admin: dto.admin,
				inventory: {
					create: []
					,
				},
				bets: {
					create: []
				},
			},
		});

		return user
		// return {
		// 	user,
		// 	accessToken: await this.issueAccessToken(user.id),
		// };
	}

	async validateUser(dto: AuthDto): Promise<UserModel> {
		const user = await this.prisma.userModel.findFirst({
			where: {
				login: dto.login,
				email: dto.email,
			},
		});
		if (!user) throw new UnauthorizedException('User with such credentials not found. Try something else.');

		const isValidPassword = await compare(dto.password, user.password);
		if (!isValidPassword) throw new UnauthorizedException('Invalid password');

		return user;
	}

	async issueAccessToken(userId: string) {
		const data = { id: userId };

		return await this.jwtService.signAsync(data, {
			expiresIn: '31d',
		});
	}

	// If you want to exclude password from the returned user data
	returnUserFields(userModel: UserModel) {
		const { password, ...result } = userModel;
		return result;
	}
}
