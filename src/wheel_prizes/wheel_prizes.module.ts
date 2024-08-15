import { Module } from '@nestjs/common';
import { WheelPrizesService } from './wheel_prizes.service';
import { WheelPrizeResolver } from './wheel_prizes.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
	providers: [WheelPrizeResolver, WheelPrizesService, PrismaService],
})
export class WheelPrizesModule { }
