describe('Listar Produtos', () => {
  beforeEach(() => {
    const url = Cypress.env('frontUrl') || 'https://front.serverest.dev/login'
    cy.visit(url);
  });

  it('Efetuar login e Listar produtos', () => {
    cy.Digitar('[data-testid="email"]', 'fulano@qa.com');
    cy.Digitar('[data-testid="senha"]', 'teste');
    cy.Clicar('[data-testid="entrar"]');
    
    cy.url().should('include', '/home');
    cy.Verificar('.jumbotron', 'Fulano');

    cy.Clicar('[data-testid="listarProdutos"]');
    cy.Verificar('.jumbotron', 'Produto QA');
  });
});
