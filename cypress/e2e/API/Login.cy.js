/// <reference types= "cypress"/>

describe('Login', () => {
  it('Efetuar Login', () => {
    cy.Login().then((response) => {
      expect(response.status).to.equal(200);
    })
  })

  it('Login inválido', () => {
    const password = "teste2"
    
    cy.loginInvalido(password)
      .then((response) => {
        expect(response.status).to.eql(401);
        expect(response.body.message).to.equals("Email e/ou senha inválidos");
      })
  })
})