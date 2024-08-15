import { Module } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { CoinsResolver } from './coins.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
	providers: [CoinsResolver, CoinsService, PrismaService],
})
export class CoinsModule { }
