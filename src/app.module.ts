
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { CorsMiddleware } from './conception/middleware';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CoinsModule } from './coins/coins.module';
import { GamesModule } from './games/games.module';
import { FaqModule } from './faq/faq.module';
import { SlotsPrizesModule } from './slots__prizes/slots__prizes.module';
import { WheelPrizesModule } from './wheel_prizes/wheel_prizes.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: 'example.env'
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			sortSchema: true,
		}),
		UsersModule,
		AuthModule,
		CoinsModule,
		GamesModule,
		FaqModule,
		SlotsPrizesModule,
		WheelPrizesModule,
	],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(CorsMiddleware).forRoutes('*')
	}
}
