import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SlotsPrizesService } from './slots__prizes.service';
import { SlotsPrizeModel } from './models/slots__prize.model';
import { SlotsPrizeDto, SlotsPrizeUpdateDto } from './dto/slots__prize.dto';
import { BaseResolver } from 'src/common/base.resolver';

@Resolver(() => SlotsPrizeModel)
export class SlotsPrizeResolver extends BaseResolver(
	SlotsPrizeModel,
	SlotsPrizeDto,
	SlotsPrizeUpdateDto,
	'createSlotsPrize',
	'slotsPrizes',
	'slotsPrize',
	'updateSlotsPrize',
	'removeSlotsPrize'
) {
	constructor(private readonly slotsPrizeService: SlotsPrizesService) {
		super(slotsPrizeService);
	}
}