import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma.service'; // Import PrismaService
import { UserModel, Prisma } from '@prisma/client'; // Import User model

import * as dotenv from 'dotenv'

dotenv.config()

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private readonly configService: ConfigService,
		private readonly prisma: PrismaService // Inject PrismaService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: true,
			secretOrKey: process.env.JWT_SECRET
		});
	}

	async validate({ id }: Pick<UserModel, 'id'>): Promise<UserModel | null> {
		return this.prisma.userModel.findUnique({ where: { id } }); // Use Prisma to find the user by id
	}
}
