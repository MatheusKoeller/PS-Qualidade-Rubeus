// cypress/support/commands.js

Cypress.Commands.add('visitForm', () => {
    cy.visit('https://qualidade.apprbs.com.br/certificacao');
});

Cypress.Commands.add('fillName', (name) => {
    if(name) cy.get('[name="pessoa.nome"]').type(name);
});

Cypress.Commands.add('fillPhone', (phone) => {
    cy.get('[name="pessoa.telefonePrincipal"]').type(phone);
});

Cypress.Commands.add('fillEmail', (email) => {
    cy.get('[name="pessoa.emailPrincipal"]').type(email);
});

Cypress.Commands.add('clickNext', () => {
    cy.get('[name="rbBtnNext"]').first().click();
});

Cypress.Commands.add('checkToastMessage', (message) => {
    cy.get('.toast').should('contain', message);
});
Cypress.Commands.add('checkButtonDisabled', () => {
    cy.get('[name="rbBtnNext"]').should('be.disabled');
});

Cypress.Commands.add('checkButtonEnabled', () => {
    cy.get('[name="rbBtnNext"]').should('not.be.disabled');
});

Cypress.Commands.add('checkEmailValidation', (message) => {
    cy.get('#rbFormContent > :nth-child(3) > :nth-child(3) > [name="validationMessage"]')
      .should('contain', message);
});