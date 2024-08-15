import { Resolver } from '@nestjs/graphql';
import { CoinsService } from './coins.service';
import { CoinModel } from './models/coin.model';
import { CoinDto, CoinUpdateDto } from './dto/coin.dto';
import { BaseResolver } from 'src/common/base.resolver';

@Resolver(() => CoinModel)
export class CoinsResolver extends BaseResolver(
	CoinModel,
	CoinDto,
	CoinUpdateDto,
	'createCoin',
	'coins',
	'coin',
	'updateCoin',
	'removeCoin'
) {
	constructor(private readonly coinsService: CoinsService) {
		super(coinsService);
	}
}