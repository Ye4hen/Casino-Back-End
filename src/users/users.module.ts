import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/prisma.service';
import { UserModel } from './models/user.model';

@Module({
	providers: [UsersResolver, UsersService, PrismaService, UserModel],
})
export class UsersModule { }
