describe('Index Page', () => {
  it('successfully loads', () => {
    cy.visit('/');

    cy.contains('반가워요!');
  });
});
