import { Module } from '@nestjs/common';
import { FaqService } from './faq.service';
import { FaqResolver } from './faq.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
	providers: [FaqResolver, FaqService, PrismaService],
})
export class FaqModule { }
