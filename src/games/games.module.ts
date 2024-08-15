import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesResolver } from './games.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
	providers: [GamesResolver, GamesService, PrismaService],
})
export class GamesModule { }
