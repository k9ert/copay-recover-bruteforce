Cypress.Commands.add('readPasswordsFromFile', () => {
  return cy.readFile('passwords.txt').then((content) => {
    return content.split('\n').filter((password) => password.trim() !== '');
  });
});

Cypress.Commands.add('readFileContents', (filePath) => {
  return cy.readFile(filePath);

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
    cy.readFileContents('wallet.aes.json').then((walletContent) => {
      console.log(walletContent)
      cy.get('#dataBackUp-1').type(JSON.stringify(walletContent),{parseSpecialCharSequences: false});
      cy.readPasswordsFromFile().then((passwords) => {
        passwords.forEach((password) => {
          cy.get('#dataPass-1').type(password);
          //cy.get(':nth-child(3) > label > .ng-valid').click();
          cy.get('form.ng-valid > .btn'). click();
          cy.contains('Incorrect backup password');
          cy.get('#dataPass-1').clear();
        });
      });
    });
  });
});
