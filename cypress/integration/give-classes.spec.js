/* eslint-disable no-undef */

describe('Give Classes', () => {
  it('should visits the give-classes', () => {
    cy.visit('/give-classes')
  });

  it('should fill the "Seus dados" section', () => {
    const name = 'Matheus Pimentel';
    const avatar = 'https://github.com/matheuscpimentel.png';
    const whatsapp = '21999999999';
    const bio = '21 anos. Estagiário de desenvolvimento da QConcursos.'
  
    cy.get('#name')
      .type(name)
      .should('have.value', name);
    
    cy.get('#avatar')
      .type(avatar)
      .should('have.value', avatar);

    cy.get('#whatsapp')
      .type(whatsapp)
      .should('have.value', whatsapp);

    cy.get('#bio')
      .type(bio)
      .should('have.value', bio);
  });

  it('should fill the "Sobre a aula" section', () => {
    cy.get('#subject')
      .select('Geografia')
      .should('have.value', 'Geografia');

    cy.get('#cost')
      .type('120');
  });

  it('should fill the "Horários disponíveis" section', () => {
    cy.get('#week_day')
      .select('Quarta-feira')
      .get('#week_day')
      .should('have.value', 3);

    cy.get('#from')
      .type('12:00')
      .should('have.value', '12:00');

      cy.get('#to')
      .type('18:00')
      .should('have.value', '18:00');
  });

  it('should submit the form', () => {
    cy.get('form')
      .wait(1000)
      .submit();
  })
});