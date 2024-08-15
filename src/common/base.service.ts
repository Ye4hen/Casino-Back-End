import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export abstract class BaseService<TModel, TCreateDto, TUpdateDto extends { id: string }> {
	constructor(
		protected readonly prisma: PrismaService,
		private readonly model,
		private readonly modelName: string
	) { }

	async create(
		dto: TCreateDto,
		uniqueFields: Array<{ field: keyof TCreateDto; message: string }> = []
	) {
		const conditions = uniqueFields.map(field => ({ [field.field]: dto[field.field] }));
		const existingItem = await this.model.findFirst({ where: { OR: conditions } });

		if (existingItem && uniqueFields.length > 0) {
			throw new ConflictException(
				uniqueFields.map(field => field.message).join(' or ')
			);
		}

		return this.model.create({ data: dto });
	}

	findAll(includes: Array<keyof TModel> = []): Promise<TModel[]> {
		const include = includes.reduce((acc, curr) => ({ ...acc, [curr]: true }), {});
		return this.model.findMany({
			include
		});
	}

	async findOne(id: string, includes: Array<keyof TModel> = []): Promise<TModel> {
		// Build the include object dynamically
		const include = includes.reduce((acc, curr) => ({ ...acc, [curr]: true }), {});
		const item = await this.model.findUnique({
			where: { id },
			include,
		});
		if (!item) throw new NotFoundException(`${this.modelName} not found`);
		return item;
	}

	async update(
		id: string,
		dto: TUpdateDto,
		uniqueFields: Array<{ field: keyof TUpdateDto; message: string }> = []
	) {
		const item = await this.model.findUnique({ where: { id } });
		if (!item) throw new NotFoundException(`${this.modelName} not found`);

		for (const { field, message } of uniqueFields) {
			if (dto[field] && dto[field] !== item[field]) {
				const existingItem = await this.model.findFirst({ where: { [field]: dto[field] } });
				if (existingItem) {
					throw new ConflictException(message);
				}
			}
		}

		return this.model.update({ where: { id }, data: dto });
	}

	async remove(id: string) {
		const item = await this.model.findUnique({ where: { id } });
		if (!item) throw new NotFoundException(`${this.modelName} not found`);
		return this.model.delete({ where: { id } });
	}
}
