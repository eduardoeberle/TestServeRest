/// <reference types= "cypress"/>

describe('Produtos', () => {
  it('Listar Produtos', () => {
    cy.ListarProdutos().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.produtos.length).to.be.greaterThan(0);
      expect(response.body).to.have.property('quantidade').that.is.a('number')
    })
  })
})