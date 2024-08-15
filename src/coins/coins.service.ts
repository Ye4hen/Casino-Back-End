import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CoinDto, CoinUpdateDto } from './dto/coin.dto';
import { CoinModel } from '@prisma/client';
import { BaseService } from 'src/common/base.service';

@Injectable()
export class CoinsService extends BaseService<CoinModel, CoinDto, CoinUpdateDto> {
	constructor(protected readonly prisma: PrismaService) {
		super(prisma, prisma.coinModel, 'Coin');
	}

	async create(dto: CoinDto) {
		return super.create(dto, [
			{ field: 'name', message: 'Coin with this name already exists' },
			{ field: 'img', message: 'Coin with this image already exists' }
		]);
	}

	async update(id: string, dto: CoinUpdateDto) {
		return super.update(id, dto, [
			{ field: 'name', message: 'Coin with this name already exists' },
			{ field: 'img', message: 'Coin with this image already exists' }
		]);
	}
}
