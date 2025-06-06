describe('Efetuar Login', () => {
  beforeEach(() => {
    const url = Cypress.env('frontUrl') || 'https://front.serverest.dev/login'
    cy.visit(url);
  });

  it('Efetuar login', () => {
    cy.Digitar('[data-testid="email"]', 'fulano@qa.com');
    cy.Digitar('[data-testid="senha"]', 'teste');
    cy.Clicar('[data-testid="entrar"]');
    
    cy.url().should('include', '/home');
    cy.Verificar('.jumbotron', 'Fulano');
  });

  it('Login inválido', () => {
    cy.Digitar('[data-testid="email"]', 'fulano@qa.com');
    cy.Digitar('[data-testid="senha"]', 'teste2');
    cy.Clicar('[data-testid="entrar"]');

    cy.Verificar('[class="alert alert-secondary alert-dismissible"]', 'Email e/ou senha inválidos');
  });
});
