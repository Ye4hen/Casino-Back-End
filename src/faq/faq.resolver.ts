import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FaqService } from './faq.service';
import { FaqModel } from './models/faq.model';
import { BaseResolver } from 'src/common/base.resolver';
import { FaqDto, FaqUpdateDto } from './dto/faq.dto';

@Resolver(() => FaqModel)
export class FaqResolver extends BaseResolver(
	FaqModel,
	FaqDto,
	FaqUpdateDto,
	'createFaq',
	'faqs',
	'faq',
	'updateFaq',
	'removeFaq'
) {
	constructor(private readonly faqService: FaqService) {
		super(faqService);
	}
}
