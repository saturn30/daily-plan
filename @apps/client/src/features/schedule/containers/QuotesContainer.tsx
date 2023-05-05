import { lifeQuotesUseCase } from '@/useCases';

import { QuoteText } from '../components';

export const QuotesContainer = () => {
  const quote = lifeQuotesUseCase.getLifeQuotes();

  return <QuoteText quote={quote} />;
};
