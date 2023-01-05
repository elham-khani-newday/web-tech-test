import { getGreeting } from '../support/app.po';

describe('game', () => {
  beforeEach(() => cy.visit('/'));

  it('renders title', () => {
    cy.findByText('Rock Paper Scissors');
  });
});
