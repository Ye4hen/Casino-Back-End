// base.resolver.ts
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BaseService } from 'src/common/base.service';
import { Type } from '@nestjs/common';

export function BaseResolver<TModel, TCreateDto, TUpdateDto extends { id: string }>(
	modelCls: Type<TModel>,
	createDtoCls: Type<TCreateDto>,
	updateDtoCls: Type<TUpdateDto>,
	createName: string,
	findAllName: string,
	findOneName: string,
	updateName: string,
	removeName: string,
) {
	@Resolver({ isAbstract: true })
	abstract class BaseResolverHost {
		constructor(public readonly service: BaseService<TModel, TCreateDto, TUpdateDto>) { }

		@Mutation(() => modelCls, { name: createName })
		create(@Args('createDto', { type: () => createDtoCls }) dto: TCreateDto) {
			return this.service.create(dto);
		}

		@Query(() => [modelCls], { name: findAllName })
		findAll() {
			return this.service.findAll();
		}

		@Query(() => modelCls, { name: findOneName })
		findOne(@Args('id', { type: () => String }) id: string) {
			return this.service.findOne(id);
		}

		@Mutation(() => modelCls, { name: updateName })
		update(@Args('updateDto', { type: () => updateDtoCls }) dto: TUpdateDto) {
			return this.service.update(dto.id, dto);
		}

		@Mutation(() => modelCls, { name: removeName })
		remove(@Args('id', { type: () => String }) id: string) {
			return this.service.remove(id);
		}
	}

	return BaseResolverHost;
}
