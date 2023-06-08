describe('My Test Suite', () => {
  it('should record manual input', () => {
    cy.visit('https://bitpay.github.io/copay-recovery/');
    cy.get('input[name="username"]').type('myusername');
    cy.get('input[name="password"]').type('mypassword');
    cy.get('button[type="submit"]').click();
    cy.contains('Welcome').should('be.visible');
  });
});