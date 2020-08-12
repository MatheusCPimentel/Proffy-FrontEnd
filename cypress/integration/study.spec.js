/* eslint-disable no-undef */

describe('Give Classes', () => {
  it('should visits the give-classes', () => {
    cy.visit('/study');
  });

  it('should select the subject', () => {
    cy.get('#subject')
      .select('Biologia')
      .should('have.value', 'Biologia');
  });

  it('should select the week day', () => {
    cy.get('#week_day')
      .select('Terça-feira')
      .should('have.value', 2);
  });

  it('should type the hour', () => {
    cy.get('#time')
      .type('13:00')
      .should('have.value', '13:00');
  });

  it('should submit the form', () => {
    cy.get('form')
      .submit();
  });

  it('should click on "Entrar em contato" button', () => {
    cy.get('footer > a')
      .wait(500)
      .click();
  });
});