describe('Listar Produtos', () => {
  beforeEach(() => {
    const url = Cypress.env('frontUrl') || 'https://front.serverest.dev/login'
    cy.visit(url);
  });

  it('Efetuar login e Listar produtos', () => {
    cy.LoginWeb('fulano@qa.com', 'teste', 'Fulano');

    cy.Clicar('[data-testid="listarProdutos"]');
    cy.Verificar('.jumbotron', 'Bespoke Granite Gloves');
  });
});
