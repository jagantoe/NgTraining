describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('MY WEBSITE')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('button').click();
    cy.get('input').type('ante@test.com');
    cy.get('app-login > button').click();
    cy.get('input').type('secret');
    cy.get('app-password > button').click();
    cy.contains('GREAT SUCCESS');
    /* ==== End Cypress Studio ==== */
  })
})
