/// <reference types="Cypress" />

describe('Test #1', () => {
  it('should open google.com', () => {
    cy.visit('www.google.com');
    cy.get('.gLFyf').type('luczniczqa{enter}');
    cy.get('#center_col').contains('Łuczniczqa - bydgoska społeczność testerska - Home | Facebook');
  })
})