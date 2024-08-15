import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WheelPrizesService } from './wheel_prizes.service';
import { WheelPrizeModel } from './models/wheel_prize.model';
import { WheelPrizeDto, WheelPrizeUpdateDto } from './dto/wheel_prize.dto';
import { BaseResolver } from 'src/common/base.resolver';

@Resolver(() => WheelPrizeModel)
export class WheelPrizeResolver extends BaseResolver(
	WheelPrizeModel,
	WheelPrizeDto,
	WheelPrizeUpdateDto,
	'createWheelPrize',
	'wheelPrizes',
	'wheelPrize',
	'updateWheelPrize',
	'removeWheelPrize'
) {
	constructor(private readonly wheelPrizeService: WheelPrizesService) {
		super(wheelPrizeService);
	}
}