import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FaqDto, FaqUpdateDto } from './dto/faq.dto';
import { BaseService } from 'src/common/base.service';
import { FaqModel } from './models/faq.model';

@Injectable()
export class FaqService extends BaseService<FaqModel, FaqDto, FaqUpdateDto> {
	constructor(protected readonly prisma: PrismaService) {
		super(prisma, prisma.faqModel, 'Faq');
	}

	async create(dto: FaqDto) {
		return super.create(dto, [
			{ field: 'question', message: 'FAQ with this question already exists' },
		]);
	}

	async update(id: string, dto: FaqUpdateDto) {
		return super.update(id, dto, [
			{ field: 'question', message: 'FAQ with this question already exists' },
		]);
	}
}
