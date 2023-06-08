Cypress.Commands.add('readPasswordsFromFile', () => {
  return cy.readFile('passwords.txt').then((content) => {
    return content.split('\n').filter((password) => password.trim() !== '');
  });
});

Cypress.Commands.add('readAedFile', () => {
  return cy.readFile('wallet.aes.json').then((content) => {
    return content;
  });
});




describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://bitpay.github.io/copay-recovery/');
    cy.get('#contentFile').click();
    cy.get(':nth-child(3) > label > .ng-valid').click();
    cy.get('form.ng-valid > .btn').click();
    cy.contains('No data provided');
  });

  it('tries passwords from file', () => {
    cy.readPasswordsFromFile().then((passwords) => {
      passwords.forEach((password) => {
        cy.get('#dataBackUp-1').type("123")
        cy.get('#dataPass-1').type(password);
        cy.get(':nth-child(3) > label > .ng-valid').click();
        //cy.get('form.ng-valid > .btn').click();
        cy.contains('No data provided');
        cy.get('#dataPass-1').clear();
      });
    });
  });
});
