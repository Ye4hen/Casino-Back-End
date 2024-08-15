import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { WheelPrizeDto, WheelPrizeUpdateDto } from './dto/wheel_prize.dto';
import { BaseService } from 'src/common/base.service';
import { WheelPrizeModel } from './models/wheel_prize.model';

@Injectable()
export class WheelPrizesService extends BaseService<WheelPrizeModel, WheelPrizeDto, WheelPrizeUpdateDto> {
	constructor(protected readonly prisma: PrismaService) {
		super(prisma, prisma.wheelPrizeModel, 'WheelPrize');
	}

	async create(dto: WheelPrizeDto) {
		return super.create(dto, [
			{ field: 'name', message: 'Prize with this name already exists' },
		]);
	}

	async update(id: string, dto: WheelPrizeUpdateDto) {
		return super.update(id, dto, [
			{ field: 'name', message: 'Prize with this name already exists' },
		]);
	}
}
