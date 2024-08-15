import { Resolver } from "@nestjs/graphql";
import { GameModel } from "./models/game.model";
import { BaseResolver } from "src/common/base.resolver";
import { GameDto, GameUpdateDto } from "./dto/game.dto";
import { GamesService } from "./games.service";

@Resolver(() => GameModel)
export class GamesResolver extends BaseResolver(
	GameModel,
	GameDto,
	GameUpdateDto,
	'createGame',
	'games',
	'game',
	'updateGame',
	'removeGame'
) {
	constructor(private readonly gamesService: GamesService) {
		super(gamesService);
	}
}