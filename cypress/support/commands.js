Cypress.Commands.add('Login', () => {
    cy.request({
        method: 'POST',
        url: '/login',
        body: {
            email: "fulano@qa.com",
            password: "teste"
        },
        failOnStatusCode: false
    }).then((response) => { return response })
})

Cypress.Commands.add('loginInvalido', (password) => {
    cy.request({
        method: 'POST',
        url: '/login',
        body: {
            email: "fulano@qa.com",
            password: password
        },
        failOnStatusCode: false
    }).then((response) => { return response })
})

Cypress.Commands.add('ListarProdutos', () => {
    cy.request({
        method: 'GET',
        url: '/produtos',
        failOnStatusCode: false
    }).then((response) => { return response })
})

Cypress.Commands.add('Digitar', (campo, texto) => {
    cy.get(campo).should('be.visible').type(texto);
})

Cypress.Commands.add('Clicar', (campo) => {
    cy.get(campo).should('be.visible').click();
})

Cypress.Commands.add('Verificar', (campo, texto) => {
    cy.get(campo).should('contain', texto);
})

Cypress.Commands.add('LoginWeb', (email, senha) => {
    cy.Digitar('[data-testid="email"]', email);
    cy.Digitar('[data-testid="senha"]', senha);
    cy.Clicar('[data-testid="entrar"]');
})