import { Injectable } from '@nestjs/common';
import { SlotsPrizeDto, SlotsPrizeUpdateDto } from './dto/slots__prize.dto';
import { PrismaService } from 'src/prisma.service';
import { BaseService } from 'src/common/base.service';
import { SlotsPrizeModel } from './models/slots__prize.model';

@Injectable()
export class SlotsPrizesService extends BaseService<SlotsPrizeModel, SlotsPrizeDto, SlotsPrizeUpdateDto> {
	constructor(protected readonly prisma: PrismaService) {
		super(prisma, prisma.slotsPrizeModel, 'SlotsPrize');
	}

	async create(dto: SlotsPrizeDto) {
		return super.create(dto, [
			{ field: 'name', message: 'Prize with this name already exists' },
			{ field: 'number', message: 'Prize with this number already exists' },
			{ field: 'img_sl', message: 'Prize with this img_sl already exists' },
			{ field: 'img_bl', message: 'Prize with this img_bl already exists' },
		]);
	}

	async update(id: string, dto: SlotsPrizeUpdateDto) {
		return super.update(id, dto, [
			{ field: 'name', message: 'Prize with this name already exists' },
			{ field: 'number', message: 'Prize with this number already exists' },
			{ field: 'img_sl', message: 'Prize with this img_sl already exists' },
			{ field: 'img_bl', message: 'Prize with this img_bl already exists' },
		]);
	}
}
