import { Injectable } from '@nestjs/common';
import { GameDto, GameUpdateDto } from './dto/game.dto';
import { PrismaService } from 'src/prisma.service';
import { BaseService } from 'src/common/base.service';
import { GameModel } from './models/game.model';

@Injectable()
export class GamesService extends BaseService<GameModel, GameDto, GameUpdateDto> {
	constructor(protected readonly prisma: PrismaService) {
		super(prisma, prisma.gameModel, 'Game');
	}

	async create(dto: GameDto) {
		return super.create(dto, [
			{ field: 'name', message: 'Game with this name already exists' },
			{ field: 'img', message: 'Game with this image already exists' }
		]);
	}

	async update(id: string, dto: GameUpdateDto) {
		return super.update(id, dto, [
			{ field: 'name', message: 'Game with this name already exists' },
			{ field: 'img', message: 'Game with this image already exists' }
		]);
	}
}
