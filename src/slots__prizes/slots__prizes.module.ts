import { Module } from '@nestjs/common';
import { SlotsPrizesService } from './slots__prizes.service';
import { SlotsPrizeResolver } from './slots__prizes.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
	providers: [SlotsPrizeResolver, SlotsPrizesService, PrismaService],
})
export class SlotsPrizesModule { }
