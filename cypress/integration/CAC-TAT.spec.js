/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(function () {
    cy.visit("./src/index.html");
  });

  it("verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it.only("preenche os campos obrigatórios e envia o formulario", function () {
    cy.get("#firstName").type('Ana');
    cy.get("#lastName").type('Silva');
    cy.get("#email").type('email@email.com');
    cy.get('#open-text-area').type('Texto');
    cy.get('button[type="submit"]').click();

    cy.get('.success').should('be.visible');
  });
});
