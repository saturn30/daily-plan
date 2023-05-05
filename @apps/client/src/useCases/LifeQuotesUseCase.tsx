class LifeQuotesUseCase {
  getLifeQuotes = () => {
    return {
      text: 'No pain, No gain.',
      speaker: 'Benjamin Franklin',
    };
  };
}

export const lifeQuotesUseCase = new LifeQuotesUseCase();
