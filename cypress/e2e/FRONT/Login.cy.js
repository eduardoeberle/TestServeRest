describe('Efetuar Login', () => {
  beforeEach(() => {
    const url = Cypress.env('frontUrl') || 'https://front.serverest.dev'
    cy.visit(url);
  });

  it('Efetuar login', () => {
    cy.LoginWeb('fulano@qa.com', 'teste');
    
    cy.url().should('include', '/home');
    cy.Verificar('.jumbotron', 'Fulano');
  });

  it('Login inválido', () => {
    cy.LoginWeb('fulano@qa.com', 'teste2');

    cy.Verificar('[class="alert alert-secondary alert-dismissible"]', 'Email e/ou senha inválidos');
  });
});
