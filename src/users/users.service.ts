import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersCreateDto, UsersUpdateDto } from './dto/user.dto';
import { PrismaService } from 'src/prisma.service';
import { UserModel } from './models/user.model';
import { BaseService } from 'src/common/base.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService extends BaseService<UserModel, UsersCreateDto, UsersUpdateDto> {
	constructor(protected readonly prisma: PrismaService) {
		super(prisma, prisma.userModel, 'User');
	}

	findAll(): Promise<UserModel[]> {
		return super.findAll(['inventory', 'bets'])
	}

	async findOne(id: string): Promise<UserModel> {
		return super.findOne(id, ['inventory', 'bets']);
	}

	async create(dto: UsersCreateDto) {
		const oldUser = await this.prisma.userModel.findFirst({
			where: {
				OR: [
					{ login: dto.login },
					{ email: dto.email },
				],
			}
		})

		if (oldUser) {
			throw new ConflictException('A user with this login or email already exists.');
		} else {
			return this.prisma.userModel.create({
				data: {
					login: dto.login,
					email: dto.email,
					password: dto.password,
					balance: dto.balance,
					avatar: dto.avatar,
					cryptoAccount: dto.cryptoAccount,
					admin: dto.admin,
					inventory: {
						create: dto.inventory.map(item => ({
							id: item.id,
							amount: item.amount,
						})),
					},
					bets: {
						create: dto.bets.map(bet => ({
							coinId: bet.coinId,
							gameId: bet.gameId,
							bet: bet.bet,
						})),
					},
				},
			});
		}
	}


	async update(id: string, dto: UsersUpdateDto) {
		const foundUser = await this.prisma.userModel.findUnique({
			where: { id },
		});

		const anotherUserLogin = await this.prisma.userModel.findFirst({
			where: {
				login: dto.login
			}
		})

		const anotherUserEmail = await this.prisma.userModel.findFirst({
			where: {
				email: dto.email
			}
		})

		if (!foundUser) {
			throw new NotFoundException('User not found');
		} else if ((dto.login && anotherUserLogin && foundUser.login !== dto.login) || (dto.email && anotherUserEmail && foundUser.email !== dto.email)) {
			throw new ConflictException('A user with this login or email already exists.');
		} else {
			const updateData: Prisma.UserModelUpdateInput = {
				...dto,
				avatar: dto.avatar,
				inventory: {
					upsert: dto.inventory.map((item) => ({
						where: { id: item.id },
						update: { amount: item.amount },
						create: { id: item.id, amount: item.amount },
					})),
				},
				bets: {
					upsert: dto.bets.map(bet => ({
						where: { id: bet.id }, // Use `id` to find the existing bet record
						update: {
							coinId: bet.coinId,
							gameId: bet.gameId,
							bet: bet.bet,
						},
						create: {
							id: bet.id,  // Ensure `id` is passed for bet creation
							coinId: bet.coinId,
							gameId: bet.gameId,
							bet: bet.bet,
						},
					})),
				}
			};


			return this.prisma.userModel.update({
				where: { id },
				data: updateData,
				include: {
					inventory: true, // Include the updated inventory in the response
					bets: true
				},
			});
		}
	}
}