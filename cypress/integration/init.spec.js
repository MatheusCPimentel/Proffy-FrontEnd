/* eslint-disable no-undef */

describe('Init', () => {
  it('is working', () => { // Verifica se os testes estão funcionando
    expect(true).to.equal(true);
  });
  
  it('should visits the app', () => {
    cy.visit('/');
  });

  it('should click on "Dar aulas" button', () => {
    cy.get('.give-classes')
      .click()
      .wait(700)
      .go('back');
  });

  it ('should click on "Estudar" button', () => {
    cy.get('.study')
      .click()
      .wait(700)
      .go('back');
  });
});